import {Helmet} from "react-helmet";
import '../App.css'
import NavBar from './parts/navbar';
import gsap from "gsap";

import { useRef } from "react";
const Home = ()=>{
    return(
<div className="max-w-[100vw] bga ">
<Helmet>
                <title>Home</title>
            </Helmet>
<NavBar />
<div>
    <div className=" h-[83vh] text-white sm:mt-16 md:mt-36
    +">
        <div className="sm:max-w-[90vw] md:max-w-[90rem] text-5xl md:text-7xl sm:ml-[6vw] md:ml-[14rem] text-left text-slate-50 font-bold roboto"><div className='text-accent sm:text-xl ml-2 mb-3 md:text-2xl'>Hi, my name is</div>Omar Yousef<div className='text-slate-200'>A web developer</div><div className='md:text-lg sm:text-sm mt-5 text-slate-300 max-w-[40rem]'>If Internet Explorer is brave enough to ask to be your default browser, You are brave enough to ask that girl out.</div><div><button className="btn btn-outline btn-accent mt-6">check LAtest work</button></div></div>



{/* Latest Projects */}
    </div>
    <div className="sm:max-w-[90vw] md:max-w-[60rem] text-slate-50 sm:ml-[6vw] md:ml-[12rem] text-left  roboto">
        <div className="bl sm:hidden md:block">
            <div>
                <div className="grid text-2xl -ml-[0.54rem] text-slate-300">

            <i class="fa-brands fa-github mb-4 hover:text-accent cursor-pointer h-4 hover:mb-5"></i>
            <i class="fa-brands fa-twitter mb-4 hover:text-accent cursor-pointer h-4 hover:mb-5"></i>
            <i class="fa-brands fa-instagram mb-12 hover:text-accent cursor-pointer hover:mb-14"></i>
                </div>

                <div className="w-[0.2rem] h-32 border-l ">

                </div>
            </div>
        </div>
        <div className="grid">
            <div className="sm:text-xl md:text-4xl text-slate-100" >
                <div className="] flex ">
                <div className="text-accent text-sm mt-[0.4rem] mr-1 ">01.</div> About Me 
                {/* <div className='border-t  border-slate-500 rounded-5xl mt-[0.9rem] ml-2 w-[50%] h-[0.1rem]'></div> */}

                </div>
                <div className="sm:text-lg md:text-xl mt-5 text-slate-300 md:max-w-[45rem]">
                Hey, I'm Omar. I code stuff with AI.

If the code works, I don't touch it. You might say I'm a bit of an introvert—but that doesn't mean I don't have my own opinions about how things should look and work.

I'm currently working on making an AI that clones people identity


                </div>

            </div>
            <div className="sm:text-xl md:text-4xl mt-20 text-slate-100" >
                <div className=" flex ">
                <div className="text-accent text-sm mt-[0.4rem] mr-1 ">02.</div> Projects 

                </div>
                {/* <div className='mt-3 text-slate-200'>
                    Latest Project:
                </div> */}
                <div className='grid mt-2 pl-3 mb-12 place-items-center  md:w-[90vw] justify-center  sm:-ml-[6vw]'>
                {/* <div className="card w-[80vw] mt-3 h-64 sm:max-w-[90vw]  bg-base-100 shadow-xl image-full">
  <div className="card-body h-64 ">
    <h2 className="card-title text-slate-50">E-STORE</h2>
    <p className="text-slate-200 md:text-lg">When I wrote this code, only God and I understood what I did. Now only God knows.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> MORE INFO SOON</button>
    </div>
  </div>
</div> */}
<div className="card card-compact md:w-[50vw]  mt-3 bg-base-300 sm:max-w-[90vw] roboto shadow-xl">
  <figure><img className="md:w-[50vw] sm:w-full ssa h-52" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="card-title text-slate-50">E-STORE</h2>
    <p className="text-slate-200 md:text-lg">When I wrote this code, only God and I understood what I did. Now only God knows.</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary mt-5"> MORE INFO SOON</button>
    </div>
  </div>
</div>
<div className="card card-compact md:w-[50vw]  mt-6 bg-base-300 sm:max-w-[90vw] roboto shadow-xl">
  <figure><img className="md:w-[50vw] sm:w-full ssa h-52" src="https://i.all3dp.com/workers/images/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2022/09/06100929/Pi-Drone-lead.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="card-title text-slate-50">Drone</h2>
    <p className="text-slate-200 md:text-lg">A drone that detects fire in forests .</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary mt-5">UNDER DEVELOPMENT</button>
    </div>
  </div>
</div>
{/* <div className="card card-side bg-base-300 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div> */}
                </div>

                {/* <center>
                <div className="sm:text-lg md:text-2xl mt-12 sm:max-w-[80vw] md:max-w-[30rem] text-left"><div className="text-4xl float-left">&quot;</div><br />If <span className="text-blue-5k00">Internet</span> Explorer is brave enough to ask to be your default browser, You are brave enough to ask that girl out.<br /><span className="text-4xl float-right">&quot;</span></div>

                </center> */}
            </div>
            
        </div>
    </div>
    
            {/* <div className="flex items-center justify-center text-[#8B949E] mt-5 ">
                <div className="sm:max-w-[90vw] md:max-w-[45rem] roboto text-lg text-center roboto">
                A new generation of store software: more features, functionalities and stability with a modern design that can fit to any store needs.

                </div>

        </div> */}
        {/* <div className="grid place-items-center mt-7">
        <button className="btn  hover:shadow-md b border-0 hover:bg-white hover:shadow-[#ffffff6a] btn-md bg-white focus:text-black focus:bg-white outline-0 text-black text btn-lg md:mt-6 roboto" >REQUEST A DEMO</button>
                </div>
                <div className="grid place-items-center mt-14 ">
                    <div className="sm:max-w-[91vw] md:max-w-[45rem]">
                    <img alt='product showcase' className="img-responsive rounded-xl" src='https://cdn.dribbble.com/users/257709/screenshots/14298975/media/825332be8d7d2649ab8382ce5779622a.png?compress=1&resize=1600x1200&vertical=top '></img>

                    </div> */}
                {/* </div> */}
</div>
</div>
    )
}
export default Home;