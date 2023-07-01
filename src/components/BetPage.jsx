import React, { useEffect, useState } from 'react'
import ControlBar from './ControlBar';
import GameBar from './GameBar';
import { wheelMake } from '../utils/Utiles';
import Navbar from './Navbar';

function BetPage() {

    const [activity, setactivity] = useState(1);

    const [betPrice, setbetPrice] = useState(10);
    const [risk, setrisk] = useState('medium');
    const [segments, setsegments] = useState('10');
    const [cordunateDregeeAry, setcordunateDregeeAry] = useState('');


    const [bet, setbet] = useState(false);
    const [centerDeg, setCenterDeg] = useState('');

    const [taka, setTaka] = useState(200);

    const [wheelAry, setwheelAry] = useState([]);


    const colorAll = {
        blue: '#004244',
        yellow: '#fde905',
        white: '#ffffff',
        warning: '#fca32f',
        green: '#059642'
    }

    const initializeValue = () => {
        return wheelMake({ risk, segments, colorAll })
    }



    useEffect(() => {
        const wheelValue = initializeValue()
        setwheelAry(wheelValue?.wheelData)
        setcordunateDregeeAry(wheelValue?.degArray)
    }, [risk, segments]);

    return (
        <>
            <Navbar taka={taka}/>
            <div className=' lg:h-[92.3vh] bg-[#033f40] p-3 pb-6 lg:p-8 lg:px-40'>
                <div className='flex flex-col-reverse lg:flex-row rounded-2xl overflow-hidden h-full w-full'>
                    <ControlBar taka={taka} setTaka={setTaka} setbet={setbet} activity={activity} setactivity={setactivity} betPrice={betPrice} setbetPrice={setbetPrice} risk={risk} setrisk={setrisk} segments={segments} setsegments={setsegments} />
                    <GameBar cordunateDregeeAry={cordunateDregeeAry} centerDeg={centerDeg} setCenterDeg={setCenterDeg} segments={segments} bet={bet} wheelAry={wheelAry} setwheelAry={setwheelAry} />
                </div>
            </div>
            <div className='h-[50px] flex items-center shadow-none justify-center bg-[#003031] border-none outline-none'>
                <p className=' text-[14px] tracking-wide text-gray-200'>copyright @ by goverment provied form 2023.</p>
            </div>
        </>
    )
}

export default BetPage