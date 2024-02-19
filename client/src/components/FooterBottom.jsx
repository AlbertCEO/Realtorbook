import React from 'react'

function FooterBottom() {
  return (
    <div className='flex flex-col py-20 px-4 max-w-6xl sm:flex-row gap-8 mx-auto'>
        {/* Image */}
        <div className='flex-1'>
            <img src='realtor.jpg' alt='Realtor' />
        </div>
{/* Text */}
        <div className='flex-1'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Realtor Book</h1>
      <p className='mb-4 text-slate-700'>Realtor Book is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-11 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    
        </div>
    </div>
  )
}

export default FooterBottom