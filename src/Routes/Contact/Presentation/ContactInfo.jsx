import React from 'react'
const ContactInfo = ({ info }) => {

    console.log(info);
    
    return (
    <div>
       <p>
         {info}
        </p>
    </div>
    )
}

export default ContactInfo