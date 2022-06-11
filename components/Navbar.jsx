import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='navbar w-100 p-0'>  
        <ul className='nav w-100 justify-content-around bg-dark p-3'>
            <li className="nav-item">
                <Link href="/">
                    <a className='nav-link text-light'>Home</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className='nav-link text-light'>About us</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className='nav-link text-light'>Contact</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className='nav-link text-light'>Products</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className='nav-link text-light'>Sign up</a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar