import '../App.css'
import NavBar from './parts/navbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useEffect,useRef } from 'react';
import {Helmet} from "react-helmet";
import React from "react";
import groovyWalkAnimation from "./s.json";
import Lottie from 'react-lottie-player'
import logo from './hi.gif';
import voice from './voice.gif';

import * as lottieJson from './s.json'

const Ai =  ()=> {

  // axios api request for chat
  const send = ()=>{
    // axios.get('/user?ID=12345')
    seta('')
    setmsgs([...msgs,{from:0, msg:a}])
    axios.post('https://ai.skyex.me/',{Nam:as + '\n Human:'+a +'.'}).then((Response)=> {
      setas(as + '\n Human:'+a +'.')
      let dd= [...msgs,{from:0, msg:a}]
      let ssa= as + '\n Human:'+a +'.'
      setas(ssa + '\n' +Response.data)
      setmsgs([...dd,{from:1, msg:Response.data}])

    })

  }



    const [msgs,setmsgs] = useState([])
    const [a,seta] = useState('')
    const [lo,setlo] = useState(0)
    const [tab,settab] = useState('loading')
    let navigate = useNavigate();
    const [as,setas] = useState('')
    // useEffect(() => {
    //   window.scroll({
    //     top: 1000000,
    //   });
    // },[msgs])
    useEffect(() => {
        setTimeout(() => {
            setlo(1)

            setTimeout(() => {
                settab('ai')
            },600)
        }, 2500);
    })
    if(tab=='loading'){
    return(

<div className="max-w-[100vw] h-full text-white  bg-[#121416] 
">
        <Helmet>
        <style>{'body { background-color: #121416; }'}</style>
        <title>Ai</title>
        </Helmet>

<div className="hero mt-[15vh] text-6xl bg ">
<div>
{/* <Lottie animationData={groovyWalkAnimation} loop={true} /> */}
<img src={logo}  />
{lo == 1 && (
    <div className="text-lg v w-screen mb-5 text-center dda">
        Developed by omar
    </div>
)}
      </div>
</div>
</div>
    )
}else if (tab == 'ai'){
    return(

<div className="max-w-[100vw] h-full text-white  bg-[#121416] 
">
<NavBar />
        <Helmet>
        <style>{'body { background-color: #121416; }'}</style>
        <title>Ai</title>
        </Helmet>

<div className="hero mt-[29vh] a  text-xl bg ">
<div>
{/* <Lottie animationData={groovyWalkAnimation} loop={true} /> */}
Hey, i'm you in the opposite <br />world.

      </div>
      
</div>
<img className='v -mb-[7rem]' src={voice}  />
</div>
    )

}
}
export default Ai;