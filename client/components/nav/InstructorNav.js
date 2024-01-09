import React, {  useEffect, useState } from 'react'
import Link from 'next/link'

const InstructorNav = () => {

  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);

  }, [process.browser && window.location.pathname]);
  return (
    <div className='nav flex-column nav-pills'>
         <Link href="/instructor">
              
                <p className={`nav-link ${current == "/instructor" && "active" }`}>Dashboard</p>
              
            </Link>
            <Link href="/instructor/course/create">
              
              <p className={`nav-link ${current == "/instructor/course/create" && "active" }`}>Course Create</p>
            
          </Link>
    </div>
  )
}

export default InstructorNav;
