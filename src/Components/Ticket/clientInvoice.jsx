import React from 'react';
import logo from "../../assets/bird_2.jpg"
import { IoMdCloseCircle } from 'react-icons/io';
import QrImg from '../../assets/ticket/qrcode.jpg'
import { FaCircleCheck, FaPhone } from 'react-icons/fa6';

const ClientInvoice = () => {
  return (
    <div className='w-full col-span-4 rounded-3xl relative'>

      {/* Top event details */}
      <div className='w-full flex items-center justify-between
      bg-red-500 px-6 py-3 rounded-tl-3xl'>

        <div className='flex items-center gap-x-3'>
            <img src={logo} alt='logo image' className='w-auto h-12 object-cover object-center rounded-full'/>
            <h1 className='text-xl text-neutral-50 font-bold
            uppercase tracking-wider pt-1'>
            Shopsy
            </h1>
        </div>

        <div className='flex items-center gap-x-2'>
            <p className='text-xl text-neutral-50 font-bold'>
            <span className='text-lg'>Invoice No:</span>aa adlada
            adkdz
            </p>
        </div>

      </div>

       <div className='w-full grid grid-cols-5 gap-8 items-center
       px-5 py-7 mb-7'>
        <div className='col-span-4 space-y-3.5'>
            {/* Eventno, per seat and date */}
            <div className='w-full flex items-center justify-between
             border-dashed border-b-2 border-neutral-200 pb-3'>
                <p className='text-base text-neutral-500 font-normal'>
                    Event No: 465
                </p>
                <p className='text-base text-neutral-500 font-normal'>
                    NPR 1600 <span className='text-xs'>/seat</span>
                </p>
                <p className='text-base text-neutral-500 font-normal'>
                    Date: 2023-10-10
                </p>
            </div>


            {/* Client detail */}
            <div className='w-full flex items-center justify-between'>
                <div className='space-y-1.5'>
                    <p className='text-base text-neutral-500 font-normal'>
                        Client's Name: <span className='font-medium'>John Doe</span> 
                    </p>
                    <p className='text-base text-neutral-500 font-normal'>
                        Total Seat No.: <span className='font-medium'>A1, A2,A3</span> 
                    </p>
                    <p className='text-base text-neutral-500 font-normal'>
                        Address: <span className='font-medium'>San Antonio</span> 
                    </p>
                    </div>

                <div className='space-y-4 flex items-center justify-center flex-col'>
                    <div className='space-y-1 text-center'>
                        <p className='text-base text-neutral-500 font-normal'>
                            Total Price 
                        </p>
                        <h1 className='text-xl text-neutral-600 font-bold'>
                            NPR -'àà'
                        </h1>
                    </div>

                    <div className='w-fit px-3 py-1 rounded-full bg-green-500/5
                    border-green-600 border text-green-600 text-sm font-medium flex
                    items-center justify-center gap-2'>
                        <FaCircleCheck size={16}/>
                        <span>Bill Paid</span>
                    </div>
                    {/* <div className='w-fit px-3 py-1 rounded-full bg-green-500/5
                    border-red-500 border text-red-500 text-sm font-medium flex
                    items-center justify-center gap-2'>
                        <IoMdCloseCircle size={16}/>
                        <span>Pending</span>
                    </div> */}

                    </div> 
            </div>



            {/* event route detail */}
            <div className='w-full flex items-center justify-between
             border-dashed border-t-2 border-neutral-200 pt-3'>
                <p className='text-base text-neutral-500 font-normal'>
                    Event Route: <span className='font-medium'>Kathmandu - Pokhara</span> 
                </p>
                <p className='text-base text-neutral-500 font-normal'>
                   Arrive at 05:00 PM
                </p>
                <p className='text-base text-neutral-500 font-normal'>
                    Departure 12:00 PM
                </p>
            </div>

        </div>

        <div className='col-span-1 boder border-neutral-200 rounded-xl
        shadow-sm p-1'>
            <img src={QrImg} alt='Qr image' className='w-full aspect-square object-cover
            object-center rounded-xl'/>
        </div>

       </div>
       
       {/* Left bottom section */}
       <div className='w-full bg-red-500 absolute bottom-0 left-0
       rounded-bly-3xl flex items-center justify-between px-5 py-1.5'>
        <p className='text-xs text-neutral-100 font-light'>
            Note: 40% charge for cancellation price 24 hours of programme.
        </p>
        <div className='flex items-center gap-x-2'>
            <FaPhone className='w-3 h-3'/>
            <p className='text-sm text-neutral-100 font-light'>
            +225 897 7373 93/ +225 897 7373 93
            </p>
        </div>
       </div>
    </div>
  )
}

export default ClientInvoice
