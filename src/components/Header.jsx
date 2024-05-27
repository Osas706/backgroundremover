import React from 'react'

const Header = () => {
  return (
    <h1 
      style={{
        fontSize: '35px',
        textAlign: 'center',
        background: 'transparent',
        color: `white`,
        margin: '30px auto'
        
      }}
    >
        Remove the <span style={{
            background: 'linear-gradient(to right, #eee, purple)',
            webkitBackgroundClip: 'text',
           webkitTextFillColor: 'transparent',
        }}>background</span> of any image in 3,2,1....
    </h1>
  )
}

export default Header;
