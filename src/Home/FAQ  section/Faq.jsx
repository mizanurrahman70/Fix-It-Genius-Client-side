import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();


const Faq = () => {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const datas = [
        { title: 'What types of electronic items do you repair?', color: 'green', description: 'We specialize in repairing a wide range of electronic devices, including laptops, desktops, smartphones, tablets, TVs, game consoles, printers, and more. For a complete list, please refer to our "Services" page.'},
        { title: 'How much does it cost to repair my electronic item?', color: 'sky', description: ' Repair costs vary depending on the type of device, the nature of the problem, and the required parts. We offer free diagnostic services to identify the issue and provide a detailed cost estimate before any repairs begin. You can schedule a diagnostic appointment through our website or contact us directly.'},
        { title: 'How long will it take to repair my electronic item?', color: 'purple', description: 'Repair turnaround times vary depending on the complexity of the problem and the availability of parts. Simple repairs can be completed within a few hours, while more complex repairs may take several days. We will provide you with an estimated timeframe when you schedule your diagnostic appointment.'},
        { title: 'Do you offer data recovery services?', color: 'amber', description: ' Yes, we offer data recovery services for data loss due to hardware failures, logical damage, or accidental deletion. Data recovery can be a complex process, and success is not always guaranteed. However, our technicians will use their expertise to recover your valuable data whenever possible. We recommend inquiring about data recovery options during your diagnostic appointment.'},
        { title: 'What is your warranty policy on repairs?', color: 'red', description: ' We offer a warranty on all repairs we perform. The specific warranty period may vary depending on the type of repair and parts used. Please inquire about our warranty details during your diagnostic appointment or check our "Warranty" page for current information.'}
    ];
    return (
        <>
        <div data-aos="fade-down-left" className="mt-5 mb-5">
        <h1 className="text-4xl font-semibold text-center">  Frequently Asked <br />
Questions_</h1>
        {/* <p className="text-center mt-5 mb-5"> Look no further! We offer top-notch electronic item repair <br /> services that are fast. Here's why you should <br /> choose us for all your electronic repair needs</p> */}
      </div>
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div data-aos="fade-left" className='md:w-1/2'>
         <img  src="https://i.ibb.co/74Yvy0L/faq.jpg" className="w-full h-full lg:h-[500px]" />
         </div>
          <div data-aos="fade-right" className='md:w-1/2'>
           
        
          <div className="space-y-4 p-2 md:p-6">
                {datas?.map((data, idx) => (
                    <div key={idx}>
                        {/* header / Title */}
                        <div onClick={() => handleToggle(idx)} className={`px-4 md:px-8 py-6 ${ idx === 0 ? 'bg-green-50 border-green-500' : idx === 1 ? 'bg-sky-50 border-sky-500' : idx === 2 ? 'bg-purple-50 border-purple-500' : idx === 3 ? 'bg-amber-50 border-amber-500' : idx === 4 ? 'bg-red-50 border-red-500' : 'bg-orange-50 border-orange-500'} border-l-[3px] cursor-pointer`}>
                            <div className="flex items-center">
                                <span>
                                    <svg className={`mr-4 ${ idx === 0 ? 'fill-green-900' : idx === 1 ? 'fill-sky-900' : idx === 2 ? 'fill-purple-900' : idx === 3 ? 'fill-amber-900' : idx === 4 ? 'fill-red-900': 'fill-orange-900'} shrink-0`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /></svg>
                                </span>
                                <h4
                                    className={`${ idx === 0 ? 'text-green-900' : idx === 1 ? 'text-sky-900' : idx === 2 ? 'text-purple-900' : idx === 3 ? 'text-amber-900' : idx === 4 ? 'text-red-900' : 'text-orange-900'} text-xl`}>
                                    {data.title}
                                </h4>
                            </div>
                        </div>
                        {/* body / content  */}
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${ idx === 0 ? 'text-green-900 bg-green-50 border-green-500' : idx === 1 ? 'text-sky-900 bg-sky-50 border-sky-500' : idx === 2 ? 'text-purple-900 bg-purple-50 border-purple-500' : idx === 3 ? 'text-amber-900 bg-amber-50 border-amber-500' : idx === 4 ? 'text-red-900 bg-red-50 border-red-500' : 'text-orange-900 bg-orange-50 border-orange-500'} `}>
                                    {data?.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


          </div>
        </div>
      </div>

      </>
    );
};

export default Faq;