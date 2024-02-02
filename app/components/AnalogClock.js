import React, { useState, useEffect } from 'react';

const AnalogClock = ({ time, setTime, setIsManual }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [handType, setHandType] = useState(null);

    // Calculate rotation for hands
    const hourDegrees = (time.getHours() % 12) / 12 * 270 + (time.getMinutes() / 60) * 30;
    const minuteDegrees = time.getMinutes() / 60 * 360;
    const secondDegrees = time.getSeconds() / 60 * 360;

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                const clockFace = document.querySelector('.clock-face');
                const clockCenter = clockFace.getBoundingClientRect();
                const angle = Math.atan2(e.clientY - clockCenter.top - clockCenter.height / 2, e.clientX - clockCenter.left - clockCenter.width / 2) * 180 / Math.PI + 90;

                let newTime = new Date(time);
                if (handType === 'hours') {
                    const hours = Math.floor(((angle >= 0 ? angle : angle + 360) / 30)) % 12;
                    newTime.setHours(hours);
                } else if (handType === 'minutes') {
                    const minutes = Math.floor(((angle >= 0 ? angle : angle + 360) / 6)) % 60;
                    newTime.setMinutes(minutes);
                }
                setIsManual(true); 
                setTime(newTime);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, handType, time, setTime]);

    const startRotation = (handType) => {
        setIsDragging(true);
        setHandType(handType);
    };

    return (
        <main className="flex">

        <div className="mx-auto my-10 analog-rotate ">
            <h1 className='text-white font-extrabold text-4xl text-center -mt-10 mb-10'>
                Analog Clock
            </h1>
            <div className="w-80 h-80 flex justify-center items-center bg-transparent rounded-full box-shadoe">
                <div className="clock-face relative w-80 h-80 rounded-full">
                    <div 
                        className="hour-hand" 
                        style={{ transform: `rotate(${hourDegrees}deg)` }} 
                        onMouseDown={() => startRotation('hours')}
                    ></div>
                    <div 
                        className="minute-hand" 
                        style={{ transform: `rotate(${minuteDegrees}deg)` }} 
                        onMouseDown={() => startRotation('minutes')}
                    ></div>
                    <div 
                        className="second-hand" 
                        style={{ transform: `rotate(${secondDegrees}deg)` }}
                    ></div>
                    <div className="circle-off" >

                    </div>
                </div>
            </div>
        </div>
        </main>
    );
};

export default AnalogClock;
