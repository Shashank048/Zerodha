import React from 'react'

function OpenAccount() {
    return ( 
        <div className='container p-9 mt-5'>
         <div className='row text-center p-9 mb-6'>
           <h1 className='mt-5'>Open a Zerodha account</h1>
           <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
           <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}} href="/signup"> Sign up Now </button>
         </div>
    </div>
     );
}

export default OpenAccount;
