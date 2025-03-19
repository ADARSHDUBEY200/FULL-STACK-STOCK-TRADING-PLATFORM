import React from 'react';


function Stats() {
    return ( 
         <div className="conatiner p-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1>Trust with confidence</h1>
                    <h2 className='fs-4 mt-5'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-4 mt-5'>No spam or gimmicks</h2>
                    <p  className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4 mt-5'>The Zerodha universe</h2>
                    <p  className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4 mt-5'>Do better with money</h2>
                    <p  className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="./public/media/images/ecosystem.png" alt="" style={{width:"90%"}} />
                    <div className='text-center'>
                        <a href='' className='mx-5'>Explore our products ;<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=''>Try Kite Demo ;<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div> 
         </div>
     );
}

export default Stats;