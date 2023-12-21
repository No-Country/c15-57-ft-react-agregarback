import React from 'react'

function ModalLayout({ children }) {
    return (
        <div className='z-[200] fixed inset-0 flex  align-middle justify-center bg-black bg-opacity-50'>
            {children}
        </div>
    )
}

export default ModalLayout