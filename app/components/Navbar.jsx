import React from 'react'
import Link from 'next/link'
import Logo from './dojo-logo.png'
import Image from 'next/image'


export default function Navbar() {
  return (
    <nav>

      <Image src={Logo} alt='Otieno helpdesk Logo' width={70} quality={100} placeholder='blur'></Image>
        <h1>Otieno helpdesk</h1>

        <Link href={'/'}>Dashboard</Link>
        <Link href={'/tickets'}>Tickets</Link>

    </nav>
  )
}
