import React, { useEffect, useRef, useState } from 'react'
import { wheelController } from '../utils/Utiles';

function GameBar(props) {

    const { cordunateDregeeAry, centerDeg, wheelAry, bet, segments, setCenterDeg } = props

    const wheelRef = useRef()


    const [x, setx] = useState(0);
    const [win, setwin] = useState(null);


    useEffect(() => {
        if (bet && wheelRef?.current) {
            let randomDeg = Math.floor(2500 + (Math.random() * 1000))

            const circleMod = (randomDeg + x) % 360
            const centerArrow = (randomDeg + x) - (circleMod % (360 / segments))


            wheelRef.current.style.transition = 'all 6s '
            wheelRef.current.style.transform = `rotate(${centerArrow}deg)`
            setx(centerArrow)
            setCenterDeg(centerArrow)
        }
    }, [bet]);

    useEffect(() => {
        if (wheelRef.current && centerDeg) {
            const accurateDegree = centerDeg % 360
            const windata = wheelController({ cordunateDregeeAry, accurateDegree, segments: parseInt(segments) })
            setwin(windata)
            localStorage.setItem('win', JSON.stringify(windata))
        }
    }, [centerDeg]);

    const colors = []




    return (
        <div className="right bg-[#003031] p-4 flex-[0.7] w-full">
            <div className="gamebar">
                <div className="gamebarContainer m-auto relative mt-10">
                    <div className=' absolute -top-[37px] left-1/2 z-50 -translate-x-1/2 h-16 object-contain w-9 overflow-hidden'>
                        <img className='h-full w-full rotate-[135deg] object-contain' src="./arrow.png" alt="marker" />
                    </div>

                    <div className="relative flex flex-col gap-y-16 justify-center items-center ">
                        <div ref={wheelRef} className="wheel h-[330px] w-[330px]  bg-white border-[15px] relative overflow-hidden duration-[5s] border-[#055859] rounded-full">
                            {[...wheelAry]}
                        </div>
                        <div className='h-[270px] flex justify-center items-center w-[270px] shadow-sm bg-[#003031] rounded-full absolute left-[50%] shadow-stone-600 top-[7%] translate-x-[-50%] '>
                            {!bet && win &&
                                <p className='text-[25px] text-center font-sans font-[700] tracking-wider text-white'>{(win.winValue).toFixed(2)}X</p>
                            }
                        </div>
                        <div className='flex items-center gap-x-2 '>
                            {
                                cordunateDregeeAry && cordunateDregeeAry.map((i, index) => {
                                    if (!colors.includes(i.color)) {
                                        colors.push(i.color);
                                        return <div key={index} className={`border-b-[6px] w-[62px] lg:w-[110px] gap-x-[2px] lg:gap-x-2 justify-center flex items-center ${i.color === '#004244' && 'border-gray-700' || i.color === '#059642' && 'border-green-700' || i.color === '#ffffff' && 'border-white' || i.color === '#fde905' && 'border-yellow-300' || i.color === '#fca32f' && 'border-orange-400'} bg-[#055859] overflow-hidden rounded-md  p-[7px] px-4`} >
                                            {!bet && win && win.winColor === i.color && <img className='h-5 w-5' src="./win.png" alt="" />}
                                            <p className=' text-[13px] lg:text-[17px] text-center font-sans font-[600] tracking-wide text-white'>{(i.winvalue).toFixed(2)}X</p>
                                            {/* { win && } */}
                                        </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameBar