import React from 'react'
import { Link } from 'react-router-dom'

function VulnerableDonationElements() {
    return (
        <>
            <div className='flex justify-center flex-col w-[1189px] text-[white] shrink-0 mx-[127px] pt-[84px] pb-[54px]'>
                <p className='text-[color:var(--White,#FFF)] text-xl not-italic font-light leading-[33.5px] mb-1'>
                    Desde majestuosos jaguares hasta coloridos loros, estas criaturas únicas enfrentan amenazas que ponen en
                    riesgo su existencia y la riqueza de nuestros ecosistemas. Es de suma importancia preservar estas especies
                    no solo por su belleza intrínseca, sino por el papel vital que desempeñan en el equilibrio de la naturaleza
                    y el patrimonio cultural de la región.
                </p>
                <h2 className='text-[color:var(--White,#FFF)] text-xl not-italic font-normal leading-[33.5px]'>
                    ¡Ayudanos a proteger y celebrar la extraordinaria vida silvestre de América Latina!
                </h2>
            </div>
            <Link
                to='/donations'
                className='flex w-[374px] justify-center items-center gap-2.5 bg-[#1A4F2E] text-[color:var(--White,#FFF)] text-center text-lg not-italic font-medium leading-6 cursor-pointer px-7 py-[13px] rounded-[50px] border-[none]'
            >
                Hacer una donación
            </Link>
        </>
    )
}

export default VulnerableDonationElements