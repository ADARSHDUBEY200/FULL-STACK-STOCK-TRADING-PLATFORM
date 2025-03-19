import React from 'react';

function Home() {
    return ( 
        <div className="container text-center mt-5 fs-5">
            <h2>We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.</h2>
            <div className="container p-3 mt-5">
        <hr />
          <div className="row p-4">
            <div className="col p-5 ">
                <p style={{lineHeight:"2rem"}}>
                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                <p style={{lineHeight:"2rem"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                  <p style={{lineHeight:"2rem"}}>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                </p>
            </div>
            <div className="col p-5">
           <p style={{lineHeight:"2rem"}}> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p> 

            <p style={{lineHeight:"2rem"}}> Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

              <p style={{lineHeight:"2rem"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p> 
            </div>
          </div>
       </div>

        </div>
     );
}

export default Home;