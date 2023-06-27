import React from 'react'

const Nav = () => {
  return (
    <div style={{display:'flex'}} >
        <ul style={{display:'flex',margin:'2px',justifyContent:'space-between',listStyle:'none'}}>
            <li style={{marginLeft:'8px',}}>Home</li>
            <li style={{marginLeft:'8px',}}>About</li>
            <li style={{marginLeft:'8px',}}>Contact</li>
        </ul>
    </div>
  )
}

export default Nav