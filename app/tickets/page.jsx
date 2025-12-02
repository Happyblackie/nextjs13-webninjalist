import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'

export default function Tickets() {
  return (
   <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets</small></p>
          </div>
          <div className='mx-auto'>
            <button className="btn-primary"><Link href={'/tickets/create'} className='text-white'> Create Ticket</Link></button>
          </div>
        </nav>

        <Suspense fallback={<Loading/>}>
          <TicketList></TicketList>
        </Suspense>

   </main>
  )
}
