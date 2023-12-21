import React from 'react'
import ModalLayout from '../Presentation/ModalLayout'
import ModalElements from '../Presentation/ModalElements'

function ModalContainer({onClose, product}) {
  return (
    <ModalLayout>
        <ModalElements  onClose={onClose} product={product}  />
    </ModalLayout>
  )
}

export default ModalContainer