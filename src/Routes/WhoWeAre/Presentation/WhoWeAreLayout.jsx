import React from 'react'

const WhoWeAreLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#212122',
        padding: '20px', // Added padding to the div
        color: 'azure'
      }}
    >
      {children}
    </div>
  )
}

export default WhoWeAreLayout