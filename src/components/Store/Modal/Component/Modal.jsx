import React from 'react'
import ModalContainer from '../Presentation/Modal'

function Modal({ onClose, product }) {
    return <ModalContainer onClose={onClose} product={product}/>
}

export default Modal