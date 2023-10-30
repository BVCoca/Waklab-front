'use client'

import { ReactNode, useEffect, useState } from 'react';
import './count.css';

interface Props {
    label : string,
    number : number,
    duration : number,
    icon : ReactNode
}

export default function Count({label, number, duration, icon}: Props) {  

    const [count, setCount] = useState<string>("0");

    useEffect(() => {
        let start = 0;
        // first three numbers from props
        const end = parseInt(number.toString().substring(0,3))
        // if zero, return
        if (start === end) return;
    
        // find duration per increment
        let totalMilSecDur = duration;
        let incrementTime = (totalMilSecDur / end) * 1000;

        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.toString().substring(3))
            if (start === end) clearInterval(timer)       
        }, incrementTime);
    
        // dependency array
      }, [number, duration]);

    return (
      <div className="Count">
        <h3>{count}</h3>
        {icon}
        <h3>{label}</h3>
      </div>
    );
  }
