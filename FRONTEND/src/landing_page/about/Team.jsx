import React from 'react';


function Team() {
    return ( 
        <>
         <div className="container p-3 mt-5 mb-5">
         <h3 className='text-center fs-2 mb-5'>People</h3>
   
          <div className="row p-4 mt-5">
            <div className="col d-flex flex-column align-items-center justify-content-center">
              
              <img src="./public/media/images/nithinKamath.jpg" alt=""  style={{borderRadius:"100%",width:"45%"}}/>
              <h4 className='mt-4'>Nithin kamath</h4>
              <h6>Founder ,CEO</h6>
            </div>
            <div className="col fs-5">
           <p style={{lineHeight:"2rem"}}> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p> 

            <p style={{lineHeight:"2rem"}}> Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

              <p style={{lineHeight:"2rem"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p> 
            </div>
          </div>
       </div>
       </>
       
     );
}

export default Team;