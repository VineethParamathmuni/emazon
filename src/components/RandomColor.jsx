import React, { useState } from 'react'
import { useEffectAfterMount } from './useEffectAfterMount';

function RandomColor() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')

    function colorSetter(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r},${g},${b})`)        
    }

    useEffectAfterMount(() => {
        count === 0 ? setColor('black') : colorSetter();
    }, [count])

  return (
    <div className='flex justify-center items-center space-x-6'>
        <button onClick={() => setCount(count + 3)} className='text-white rounded-md px-10 py-2 mt-10' style={{backgroundColor : color}}>{count}</button>
        {count > 0 && <button onClick={() => setCount(0)} className='text-white rounded-md px-10 py-2 mt-10 bg-black'>Reset</button>}        
    </div>
  )
}

export default RandomColor