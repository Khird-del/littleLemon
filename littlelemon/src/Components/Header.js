import React from 'react'
import Logo from '../Assets/icons_assets/Logo.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <div style={{backgroundColor:"#f5f5f5",color:'black',display:'flex', justifyContent:'space-between',alignItems:'center', padding:'10px 20px'}}>
        <img height={'50px'} src={Logo} style={{alignSelf:'flex-start'}} />
        <Nav/>
        </div>
  )
}

export default Header