// pages/index.js
'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';


export default function ClockPage() {
    const [time, setTime] = useState(new Date());
    const [isManual, setIsManual] = useState(false);

    // Automatic time updates
    useEffect(() => {
        if (!isManual) {
            const interval = setInterval(() => {
                setTime(new Date());
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isManual]);

    // Manual time updates
    useEffect(() => {
        if (isManual) {
            const interval = setInterval(() => {
                setTime(prevTime => new Date(prevTime.getTime() + 1000));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [time, isManual]);

    return (
        <main className='mx-auto'>
            <DigitalClock time={time} setTime={setTime} setIsManual={setIsManual} />
            <AnalogClock time={time} setTime={setTime} setIsManual={setIsManual} />
        </main>
    );
}