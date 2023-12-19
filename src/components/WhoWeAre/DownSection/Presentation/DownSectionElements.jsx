import React from 'react'

function DownSectionElements() {
    return (
        <>
            <div className='md:w-[30%]'>
                <h2 className='font-robotoM text-lg font-black mb-3 text-itemTitle'>
                    {WhoWeAreInfoContent.downSectionBanner}
                </h2>
                <p className='font-robotoL text-[0.8rem] mb-8'>
                    {WhoWeAreInfoContent.downSectionDescription}
                </p>
            </div>
            <figure>
                <img src={certificate} alt='logo certificado' className='md:w-1/4 md:h-1/4' />
            </figure>
        </>
    )
}

export default DownSectionElements