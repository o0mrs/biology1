import '../App.css'
import NavBar from './parts/navbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";

const Chat =  ()=> {
  
  // axios api request for chat
  const send = ()=>{
    // axios.get('/user?ID=12345')
    seta('')
    setmsgs([...msgs,{from:0, msg:a}])
    axios.post('https://ai.skyex.me/bio',{Nam:as + '\n Human:'+a +'.'}).then((Response)=> {
      setas(as + '\n Human:'+a +'.')
      let dd= [...msgs,{from:0, msg:a}]
      let ssa= as + '\n Human:'+a +'.'
      setas(ssa + '\n' +Response.data)
      setmsgs([...dd,{from:1, msg:Response.data}])

    })

  }



    const [msgs,setmsgs] = useState([])
    const [a,seta] = useState('')
    let navigate = useNavigate();
    const [as,setas] = useState('')
    useEffect(() => {
      if(msgs.length > 1){
        window.scroll({
          top: 1000000,
        });
      }

    },[msgs])
    return(

<div className="max-w-[100vw] h-full text-white  bg-[#121416] 
">
        <Helmet>
        <style>{'body { background-color: #121416; }'}</style>

        </Helmet>
<div className=' h-[100vh]'>
  <div className='ttt bg-[#121416] w-[100vw]'>
  <div className='flex p-4 bg-[#121416]'>
<i class="fa-solid fa-arrow-left text-2xl mt-1"></i>
<img className='rounded-full w-10 h-10 ml-4' src={"https://lh3.googleusercontent.com/a-/AFdZuco9rmTMGt5Rs-ME7YmQ2_gsvyTmu4VGjPX0VcqmQg=s96-c"}/>
<div className="ml-3 grid"><div>
  Bio Ai
  <div className="text-xs">
    Developed by Omar</div></div></div>
    <div>
      <div className='float-right  top-6 right-4 absolute '>
{/* <div className="float-right  " onClick={console.log(snapshots)}>
Skip
</div> */}
      </div>
    </div>
</div>
  </div>

<div className="mb-16  flex">



        {/* {loading && <span>List: Loading...</span>} */}
<div className='mb-24 mt-14'>
{msgs.map((get)=>{
            if(get.from == 1){
              return(

                <div id='dds' className='float-right'>
                  <div className='w-aut max-w-xs'>
                  <div id='msgg' className=" mt-4 bg-gray-900 grid  h-auto float-left rounded-xl p-2">{get.msg}</div>
                  </div>

                </div>
              //   <div className=' '>
              // <span id='rightmsg' className="float grid mt-4 justify-items-end ">{get.msg}</span>
              //   </div>

              )
            }else{
              return(
                <div id='dds' className='float-right'>

                <div id='msgg' className=" mt-4 mr-2 bg-indigo-900 w-auto max-w-xs grid float-right rounded-xl p-2">{get.msg}</div>
                </div>

                // <span className="float-right mt-4 grid justify-items-start bg-gray-900 rounded-xl p-1 pl-2 w-20">{get.msg}</span>
            )

            }
        })}

</div>



        </div>


</div>
<div>
<div>
<textarea type="text" onChange={(e)=>{seta(e.target.value)}} value={a} className='grid bg bg-[#0e0f11]  place-items-center static rounded-xl my-1 py-2 px-12 ' placeholder='Type...' id='inmsg' />
<span id='inmsgcam' className="absolute fas fa-camera text-xl mb-0.5 ml-3"></span>
<span id='inmsgsend' className="absolute text-blue-600 h-10" onClick={send}>send</span>
        </div>
        </div>



</div>
    )
}
export default Chat;