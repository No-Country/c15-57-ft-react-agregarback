import React from 'react'

import ContactLayout from './ContactLayout'
import ContactInfo from './ContactInfo'

const Contact = ({ info }) => {
console.log(info);
    return (
        <ContactLayout>
            <ContactInfo info={info} />
        </ContactLayout>)
}

export default Contact