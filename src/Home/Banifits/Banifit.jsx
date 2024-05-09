import React from 'react';

const Banifit = () => {
    return (
       <>
       <div>
        <h1 className='text-4xl font-semibold text-center'>Benefits</h1>
       </div>
       <div className="hero min-h-screen  bg-[#707845] rounded-md">
  <div className="hero-content flex-col lg:flex-row">
   <div className='w-1/2'>
   <img src="https://i.ibb.co/pK4G3c8/petersime-electronic-repairs.png" className=" rounded-lg shadow-2xl" />
   </div>
    <div className='w-1/2 bg-[#707845] h-40 text-zinc-100 space-y-6'>
      <h1 className="text-5xl font-bold">Benefits</h1>
     <p><span className='text-xl font-extrabold'>Lifetime service:</span>Repair of electronics as long as your incubators are in service</p>
     <p><span className='text-xl font-extrabold'>Qualified repairs:</span>100% in-house repair by our own experts including comprehensive testing</p>
     <p><span className='text-xl font-extrabold'>Lower total cost:</span>Repairs save you money compared to purchasing new parts</p>
    </div>
  </div>
</div>
       </>
    );
};

export default Banifit;