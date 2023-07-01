// --> Akane Two funciton ase akta wheelMake and areakta wheelController -> Don't Forget Find other.


export const wheelMake = (props) => {

    const { risk, segments, colorAll } = props

    let degArray = []
    let array = []
    let count = 0


    const width = (s) => {
        const segments = parseInt(s)
        if (segments === 20) return '53px'
        else if (segments === 30) return '37px'
        else if (segments === 50) return '22px'
        else return '102px'
    }

    const left = (s) => {
        const segments = parseInt(s)
        if (segments === 20) return '125px'
        else if (segments === 30) return '134px'
        else if (segments === 50) return '141px'
        else return '100px'
    }

    const htmlElement = (loopNo, color) => {
        return <div key={loopNo} className="segment" style={{ width: width(segments), left: left(segments), backgroundColor: colorAll[color], transform: `rotate(${(360 / segments) * (loopNo - 1)}deg)` }}>
            {loopNo}
        </div>
    }

    const LowhtmlElement = (loopNo, color) => {
        return <div key={loopNo + 1} className="segment" style={{ width: width(segments) , left: left(segments), backgroundColor: colorAll[color], transform: `rotate(${(360 / segments) * loopNo}deg)` }}>
            {loopNo + 1}
        </div>
    }

    if (risk === 'high') {

        for (let a = 1; a <= segments; a++) {
            if (a === 1) {
                array[a] = htmlElement(a, 'warning')
                degArray.push({
                    color: colorAll.warning,
                    degree: (a - 1) * (360 / segments),
                    winvalue: 50.00,
                })

            } else {
                array[a] = htmlElement(a, 'blue')
                degArray.push({
                    color: colorAll.blue,
                    degree: (a - 1) * (360 / segments),
                    winvalue: 0,
                })
            }
        }

    } else if (risk === 'medium') {

        // => Sob gular modde 0 set just.
        for (let a = 1; a <= segments; a++) {
            array[a] = 0
        }

        // ==> Purple Segment. 
        for (let b = 1; b <= segments; b = b + 2) {
            if (array[b] === 0) {
                array[b] = htmlElement(b, 'blue')
                degArray.push({
                    color: colorAll.blue,
                    degree: (b - 1) * (360 / segments),
                    winvalue: 0,
                })
            }
        }

        // ===> Green Segment
        for (let c = 2; c <= segments; c = c + 4) {
            if (array[c] === 0) {
                array[c] = htmlElement(c, 'green')
                count++
                degArray.push({
                    color: colorAll.green,
                    degree: (c - 1) * (360 / segments),
                    winvalue: 1.50,
                })
            }
            if (count === Math.floor(segments * 20 / 100)) {
                count = 0;
                break;
            }
        }

        // // ====> Other Segment
        for (let d = 4; d <= segments; d++) {
            if (array[d] === 0 && count === 0) {
                array[d] = htmlElement(d, 'white')
                count = 1
                degArray.push({
                    color: colorAll.white,
                    degree: (d - 1) * (360 / segments),
                    winvalue: 1.80,
                })
            } else if (array[d] === 0 && count === 1) {
                array[d] = htmlElement(d, 'yellow')
                count = 2
                degArray.push({
                    color: colorAll.yellow,
                    degree: (d - 1) * (360 / segments),
                    winvalue: 2.00,
                })
            } else if (array[d] === 0 && count === 2) {
                array[d] = htmlElement(d, 'warning')
                count = 0
                degArray.push({
                    color: colorAll.warning,
                    degree: (d - 1) * (360 / segments),
                    winvalue: 3.00,
                })
            }
        }


    } else {

        for (let a = 1; a <= segments; a++) {
            array[a] = 0
        }


        const div = segments / 10
        const blueSegment = div * 2

        for (let b = 1; b <= segments; b = b + segments / blueSegment) {
            if (array[b] === 0) {
                array[b] = htmlElement(b, 'blue')
                degArray.push({
                    color: colorAll.blue,
                    degree: (b - 1) * (360 / segments),
                    winvalue: 0,
                })
            }
        }

        for (let c = 1; c < segments; c = c + 10) {
            if (array[c] !== 0) {
                array[c + 1] = LowhtmlElement(c, 'green')
                degArray.push({
                    color: colorAll.green,
                    degree: c * (360 / segments),
                    winvalue: 1.5
                })
            }
        }

        for (let d = 1; d <= segments; d++) {
            if (array[d] === 0) {
                array[d] = htmlElement(d, 'white')
                degArray.push({
                    color: colorAll.white,
                    degree: (d - 1) * (360 / segments),
                    winvalue: 1.80
                })
            }
        }

    }

    return { wheelData: array, degArray }


}


export const wheelController = (props) => {

    const { cordunateDregeeAry, accurateDegree, segments } = props

    console.log(props)

    for (let s = 0; s < cordunateDregeeAry.length; s++) {

        // => p1 -> const deg ar mardome deg = [{ degree , color , winvalue}] Portek ta teke degree nicce ,
        //  p2 -> aikane jehoto Wheel ta right a gortaete tay color gula right cole jacce tay wheel ar left side ar deg neoyer jonne ai kaj , 
        // p3 -> aita simple just Portek stay color deg ber kore aikane devision korce
        const deg = parseInt(cordunateDregeeAry[s].degree)
        const oppositeSide_Deg = 360 - deg
        const spain = (360 / segments) / 2

        if (accurateDegree >= (oppositeSide_Deg - spain) && accurateDegree <= (oppositeSide_Deg + spain)) {
            return {
                winValue: cordunateDregeeAry[s].winvalue,
                winColor: cordunateDregeeAry[s].color,
            }
        } else {
            if (accurateDegree === 0) {
                return {
                    winValue: cordunateDregeeAry[0].winvalue,
                    winColor: cordunateDregeeAry[0].color,
                }
            }
        }

    }

}