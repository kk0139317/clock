// pages/index.js
'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';

export default function ClockPage() {
  const [time, setTime] = useState(new Date());
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => {
          if (isManual) {
              // Increment the manually set time by one second
              setTime(prevTime => new Date(prevTime.getTime() + 1000));
          } else {
              // Set the time to the current date and time
              setTime(new Date());
          }
      }, 1000);

      return () => clearInterval(interval);
  }, [isManual]); // Depend on isManual state


    return (

            <main className='mx-auto' >
                <DigitalClock time={time} setTime={setTime} setIsManual={setIsManual} />
                <AnalogClock time={time} />
            </main>

    )
}
