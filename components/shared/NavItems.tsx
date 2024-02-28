import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className='md:flex-between flex w-full flex-col items-star gap-5 md:flex-row'>
         {headerLinks.map((link) =>{
          const isActive = pathname === link.route;

            return(
                <li>
                   key = {link.route}
                   className = {`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}
                </li>
            )
         })}
    </ul>
  )
}

export default NavItems