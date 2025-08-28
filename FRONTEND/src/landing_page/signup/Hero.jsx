import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Hero = () => {
    const [isclicked , setIsclicked] = useState(true);

    const handleClicked = ()=>{
        setIsclicked(!isclicked);
    }
    return (
        <div className='container text-center mt-5'>
            <div>
                <p className='fw-bold fs-1 text-muted'> Open a free demat and trading account online</p>
                <p className='fs-5 fw-normal text-muted'>  Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className='container row mt-5'>
                <div className='col-8 p-3'>
                 <img src="./public/media/images/Signup.jpg" alt="image" style={{width:"60%"}}/>
                </div>
                <div className='col-4'>
                   {
                    isclicked ? <Login/> : <Signup/>

                    
                   }

                  {
                    isclicked ? <button className='btn btn-link' onClick={handleClicked} style={{textDecoration:"none"}}>Don't Have An Account? <b>SingIn</b></button> : <button  className='btn btn-link' onClick={handleClicked} style={{textDecoration:"none"}}>Already have an account? <b>LogIn</b> </button> 
                  }

                  
                </div>
            </div>
        </div>
    )
}

export default Hero