import Link from 'next/link';
import React from 'react'

//fetch ticket data from local json file
async function getTickets()
{

  await new Promise(resolve => setTimeout(resolve, 3000))
                                                                    //use 0 to opt out of using cache  
    const res = await fetch('http://localhost:4000/tickets', { next: {revalidate: 0} });

    return res.json();
}


export  default async function TicketList() {

    const tickets = await getTickets()
  return (
    <>
        {/* map through the tickets */}

       {tickets.map((ticket) => (
            <div key={ticket.id} className='card my-5'>
              <Link href={`/tickets/${ticket.id}`}>
                <h3>{ticket.title}</h3>

                {/* maximum 200 words otherwise slice */}
                <p>{ticket.body.slice(0,200 )}...</p>

                <div className={`pill ${ticket.priority}`}>  
                    {ticket.priority} priority
                </div>
               </Link>  
            </div>
       ))}

            {/* if tickets are finished */}
       {tickets.length === 0 && (
        <p className='text-center'>There are no open tickets. Sorry</p>
       )}

    </>
  )
}
