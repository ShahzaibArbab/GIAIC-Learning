"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

const Header = () => {
    const router= useRouter();
  return (
    <div>
      <button onClick={()=> router.push('/')}>Home</button> <br />
      <button onClick={()=> router.push('/about')}>About</button><br />
      <button onClick={()=> router.push('/contact')}>Contact</button>
    </div>
  )
}

export default Header;
