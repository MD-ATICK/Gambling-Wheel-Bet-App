import React, { useState, useEffect, useRef } from 'react'
import Swal from 'sweetalert2'
import { toast } from 'react-hot-toast'

function ControlBar({ taka, setTaka, activity, setactivity, setbetPrice, risk, setrisk, segments, setsegments, setbet }) {

    const [block, setblock] = useState(false);
    const audioRef = useRef(null);

    const [betTaka, setbetTaka] = useState(1);
    const [countofBets, setcountofBets] = useState(10);

    let count = 0;

    const BetHanlder = () => {
        if (betTaka > taka) {
            return toast.error('Your balance is low!!')
        }
        // => activity "1" holo normal and activity "2" holo auto
        if (activity === 1) {
            toast.error(`bet -${betTaka}`)
            audioRef.current.play();
            audioRef.current.volume = 1;
            setblock(true)
            setbet(true)

            setTimeout(() => {
                const win = localStorage.getItem('win')
                const winParse = JSON.parse(win)
                console.log('win', winParse)
                setblock(false)
                setbet(false)
                betTaka * winParse.winValue === 0 ? toast.error('win +0') : toast.success(`win +${betTaka * winParse.winValue}`)
                win && win !== null && setTaka((taka - betTaka) + (betTaka * winParse.winValue))
                localStorage.removeItem('win')
            }, 6100)
        } else {


            toast.error(`bet -${betTaka}`)
            audioRef.current.play();
            audioRef.current.volume = 1;
            setblock(true)
            setbet(true)

            setTimeout(() => {
                const win = localStorage.getItem('win')
                const winParse = JSON.parse(win)
                console.log('win', winParse)
                setblock(false)
                setbet(false)
                betTaka * winParse.winValue === 0 ? toast.error('win +0') : toast.success(`win +${betTaka * winParse.winValue}`)
                win && win !== null && setTaka((taka - betTaka) + (betTaka * winParse.winValue))
                localStorage.removeItem('win')
            }, 6100)

            setInterval(() => {
                if (count === (countofBets - 1)) {
                    return clearInterval()
                }
                console.log('render')
                toast.error(`bet -${betTaka}`)
                audioRef.current.play();
                audioRef.current.volume = 1;
                setblock(true)
                setbet(true)

                setTimeout(() => {
                    const win = localStorage.getItem('win')
                    const winParse = JSON.parse(win)
                    console.log('win', winParse)
                    setblock(false)
                    setbet(false)
                    betTaka * winParse.winValue === 0 ? toast.error('win +0') : toast.success(`win +${betTaka * winParse.winValue}`)
                    win && win !== null && setTaka((taka - betTaka) + (betTaka * winParse.winValue))
                    localStorage.removeItem('win')
                    count++
                }, 6100);

            }, 6200)
        }
    }

    return (
        <div className="left xl:block p-10 bg-[#055859] flex-[0.35] w-full">
            <div className='h-[45px] relative flex justify-evenly p-1 mx-auto lg:w-[300px] rounded-full bg-[#003031]'>
                <div className={`absolute h-[37px] w-1/2 ${activity === 1 ? 'left-1' : 'right-1'} duration-200 bg-[#055859] rounded-full cursor-pointer font-sans tracking-wide items-center flex justify-center text-white`}>{activity === 1 ? 'Normal' : 'Auto'}</div>
                <div onClick={() => setactivity(1)} className="left w-full text-center text-white cursor-pointer font-sans tracking-wide items-center flex justify-center rounded-full">Normal</div>
                <div onClick={() => setactivity(2)} className="right text-center text-white font-sans tracking-wide cursor-pointer items-center flex justify-center rounded-full w-full">Auto</div>
            </div>
            <audio ref={audioRef}>
                <source src="./bet-sound.wav" type="audio/mp3" />
            </audio>
            <div className='flex flex-col'>
                <label htmlFor="one" className=' font-sans tracking-wider font-[600] text-white mt-6 mb-2 text-[15px] flex justify-between'>* Bet Pricing <span className='text-[#63dd07] font-[500] tracking-wide text-[16px]'>${betTaka}</span></label>
                <div type="text" className='border-[2.5px] outline-none text-white flex items-center font-sans tracking-wider font-[500] border-[#00797b] rounded-sm bg-[#003031]'>
                    <input value={betTaka} onChange={(e) => setbetPrice(e.target.value)} type="number" className='h-full outline-none w-full bg-transparent py-2 px-4 font-sans tracking-wide font-[500]' />
                    <button className='h-full px-3 tracking-wider font-sans py-2 bg-[#00797b]' onClick={() => setbetTaka(prev => prev + 1)} >1+</button>
                    <button className='h-full px-3 tracking-wider font-sans border-r-[2px] border-[#005c5e] py-2 bg-[#00797b]' onClick={() => {
                        betTaka > 1 ? setbetTaka(betTaka / 2) : Swal.fire({
                            position: 'top-end',
                            icon: 'warning',
                            title: 'Bet taka should be greater than 1!!',
                            showConfirmButton: false,
                            timer: 1200
                        })
                    }} >1/2</button>
                    <button className='h-full px-3 tracking-wider font-sans py-2 bg-[#00797b]' onClick={() => setbetTaka((betTaka * 2))} >2x</button>
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="one" className=' font-sans tracking-wider font-[600] text-white mt-6 mb-2 text-[15px]'>* Risk</label>
                <select type="text" defaultValue={'medium'} onChange={(e) => setrisk(e.target.value)} className='border-[2.5px] outline-none text-white py-2 px-4 font-sans tracking-wider font-[500] border-[#00797b] rounded-sm bg-[#003031]'>
                    <option className='font-sans tracking-wider font-[500]' value="high">High</option>
                    <option className='font-sans tracking-wider font-[500]' value="medium">Medium</option>
                    <option className='font-sans tracking-wider font-[500]' value="normal">Normal</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="one" className=' font-sans tracking-wider font-[600] text-white mt-6 mb-2 text-[15px]'>* Segments</label>
                <select type="text" defaultValue={'10'} onChange={(e) => setsegments(e.target.value)} className='border-[2.5px] outline-none text-white py-2 px-4 font-sans tracking-wider font-[500] border-[#00797b] rounded-sm bg-[#003031]'>
                    <option className='font-sans tracking-wider font-[500]' value="10">10</option>
                    <option className='font-sans tracking-wider font-[500]' value="20">20</option>
                    <option className='font-sans tracking-wider font-[500]' value="30">30</option>
                    <option className='font-sans tracking-wider font-[500]' value="50">50</option>
                </select>
            </div>
            {
                activity === 2 &&
                <div className='flex flex-col'>
                    <label htmlFor="one" className=' font-sans tracking-wider font-[600] text-white mt-6 mb-2 text-[15px]'>* Number of Bets</label>
                    <select type="text" defaultValue={countofBets} onChange={(e) => setcountofBets(e.target.value)} className='border-[2.5px] outline-none text-white py-2 px-4 font-sans tracking-wider font-[500] border-[#00797b] rounded-sm bg-[#003031]'>
                        <option className='font-sans tracking-wider font-[500]' value="1">1</option>
                        <option className='font-sans tracking-wider font-[500]' value="3">3</option>
                        <option className='font-sans tracking-wider font-[500]' value="5">5</option>
                        <option className='font-sans tracking-wider font-[500]' value="10">10</option>
                        <option className='font-sans tracking-wider font-[500]' value="20">20</option>
                        <option className='font-sans tracking-wider font-[500]' value="50">50</option>
                        <option className='font-sans tracking-wider font-[500]' value="100">100</option>
                    </select>
                </div>
            }
            <button onClick={BetHanlder} disabled={block ? true : false} className={`${block ? ' cursor-not-allowed bg-[#124950d6]' : ' cursor-pointer bg-[#289920]'} w-[200px] justify-center text-white transition flex ml-auto text-center py-2  mt-10 font-sans tracking-wide font-[500] shadow-lg hover:scale-105 duration-300 rounded-full`} >Bet</button>
        </div>
    )
}

export default ControlBar