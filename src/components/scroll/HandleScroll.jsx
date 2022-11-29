import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react'
import { refsArray } from '../../framework/utils/refUtils';

export default function HandleScroll(props) {
    // const { percentage } = props;
    const data = useScroll()
    let prevScroll = 0;
    const { camera } =useThree();
    const [text, setText] = useState(null);
    const [model, setModel] = useState(null);
    useEffect(() => {
        setText(refsArray.find((obj) => obj.name === 'floatingText'))
        setModel(refsArray.find((obj) => obj.name === 'Naushad'))
    }, [refsArray]);
    
    useFrame(() => {
        console.log('data', data);
        if(data.scroll.current > 0.001 && data.scroll.current < 1){
            if(text !== -1 && model !== -1) {
                text.position.y = data.scroll.current * 10
                model.position.x = -data.scroll.current * 12
                // camera.position.z = data.scroll.current * 8
                // if(prevScroll < data.scroll.current) camera.position.z = 15 + data.scroll.current * 8
                // else camera.position.z = 15 - data.scroll.current * 8
                // prevScroll = data.scroll.current
            }
        }
    })
  return (
    // <div>HandleScroll</div>
    null
  )
}
