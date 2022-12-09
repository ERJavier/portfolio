import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <a href='#!'>Web Developer</a>
      <ul>
        <li><Link href={'#'}>Contact</Link></li>
        <li> <Link href={'/project.js'}>Projects</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
