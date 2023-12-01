import { useState } from 'react'

export const useFormValidation = () => {
  const [formSend, setFormSend] = useState(false)

  const handleSubmit = (values, resetForm) => {
    resetForm()
    console.log(values)
    setFormSend(true)
    setTimeout(() => setFormSend(false), 3000)
  }

  const validateForm = (values) => {
    const errors = {}

    // Validate name
    if (!values.name) {
      errors.name = 'Por favor ingresa un nombre'
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
      errors.name = 'El nombre solo puede contener letras y espacios'
    }

    // Validate email
    if (!values.email) {
      errors.email = 'Por favor ingresa un email'
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
      errors.email =
        'El email solo puede contener letras, números, puntos, guiones y guion bajo.'
    }

    return errors
  }

  return {
    formSend,
    handleSubmit,
    validateForm
  }
}
