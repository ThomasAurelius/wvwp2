import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='bg-stone-200 py-12'>
         <nav className="center">
            <ul className="flex justify-center gap-8">
               <li>
                  <Link className='text-sm font-medium uppercase text-stone-500 hover:text-stone-600' href='/'>Home</Link>
               </li>
               <li>
                  <Link className='text-sm font-medium uppercase text-stone-500 hover:text-stone-600' href='/players'>Players</Link>
               </li>
               <li>
                  <Link className='text-sm font-medium uppercase text-stone-500 hover:text-stone-600' href='/admin'>Admin</Link>
               </li>

            </ul>
         </nav>
      </header>
    </>
  )
}

export default Header