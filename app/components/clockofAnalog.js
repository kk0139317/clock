// components/AnalogClock.js
import React, { useState } from 'react';

const AnalogClock = ({ time, setTime }) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // Calculate rotation for hands
    const hourDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;
    const minuteDegrees = minutes / 60 * 360;
    const secondDegrees = seconds / 60 * 360;

    return (
        <main className='flex' >

        <div className="mx-auto my-10">
        <h1 className=' text-white font-extrabold text-4xl text-center -mt-10 mb-10' >
                Analog Clock 
            </h1>
            <div className="w-80 h-80 flex justify-center items-center bg-transparent rounded-full box-shadoe">
                <div className="clock-face relative w-80 h-80 rounded-full " >
                    <div className="hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }}></div>
                    <div className="minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }}></div>
                    <div className="second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }}></div>
                </div>
            </div>
        </div>
        </main>
    );
};

export default AnalogClock;
