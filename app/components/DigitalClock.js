// components/DigitalClock.js
import React from 'react';

const DigitalClock = ({ time, setTime, setIsManual }) => {
    const onTimeChange = (event) => {
        setIsManual(true); // Set to manual mode

        const { name, value } = event.target;
        let newTime = new Date(time);


        if (name === 'hours') newTime.setHours(value);
        else if (name === 'minutes') newTime.setMinutes(value);
        else if (name === 'seconds') newTime.setSeconds(value);

        setTime(newTime);
    };

    return (
        <main className=' flex flex-col  ' >

        <div className='mx-auto ' >
            <h1 className=' text-white font-extrabold text-4xl text-center mt-10 mb-10' >
                Digital Clock 
            </h1>
            <div className=' w-80 h-40 my-10 bg-transparent text-blue-800 text-4xl  shadow-blue-700 shadow-xl transition-shadow rounded-xl flex flex-row px-0' >
                <div className='my-auto mx-auto ' >
                <input 
                type="number" 
                name="hours" 
                value={time.getHours() }  
                onChange={onTimeChange} 
                maxLength={2}
                className=' bg-transparent text-blue-800 text-4xl w-20 focus:outline-none focus:border-none font-extrabold mx-auto my-auto text-center float-left'
            />
            </div>
            <span className='my-auto -mx-10 ' >:</span>
            <div className='my-auto mx-auto' >
                <input 
                type="number" 
                name="minutes" 
                value={time.getMinutes()} 
                onChange={onTimeChange}
                maxLength={2}
                className=' bg-transparent text-blue-800 text-4xl w-20 focus:outline-none focus:border-none font-extrabold mx-auto my-auto text-center' 
            />
            
            </div>
            <span className='my-auto -mx-10 ' >:</span>
            <div className='my-auto mx-auto' >
                <input 
                type="number" 
                name="seconds" 
                value={time.getSeconds()} 
                onChange={onTimeChange} 
                maxLength={2}
                className=' bg-transparent text-blue-800 text-4xl w-20 focus:outline-none focus:border-none font-extrabold mx-auto my-auto text-center'
            />
            </div>
                
            </div>
        </div>
</main>
    );
};

export default DigitalClock;
