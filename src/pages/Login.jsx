import React, { useState } from 'react'

const Login = () => {
  const [hidden, setHidden] = useState(true)
  const burger = () => {
    if (hidden) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }
  const menu = () => {}
  return (
    <div className='text-gray-600 font-body'>
      <div className='grid md:grid-cols-3 '>
        <div className='md:col-span-1 md:flex justify-end'>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                <a href='#' className='hover:text-gray-700 py-1'>
                  Food Ninja
                </a>
              </h1>
              <div className='px-4 cursor-pointer md:hidden' onClick={burger}>
                <svg xmlns='http://www.w3.org/2000/svg' id='burger' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6 w-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
              </div>
            </div>
            {hidden && (
              <ul className={`${hidden ? 'block' : 'hidden'} text-sm mt-6   md:block' id='menu`}>
                <li className='text-gray-700 py-1 font-bold  border-r-4 border-primary'>
                  <a href='#' className='flex px-4 justify-end '>
                    <span>Home</span>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6 w-5 ml-2'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='#' className='flex px-4 justify-end border-r-4 border-white'>
                    <span>About</span>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6 w-5 ml-2'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z' />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='#' className='flex px-4 justify-end border-r-4 border-white'>
                    <span>Contact</span>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6 w-5 ml-2'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z' />
                    </svg>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
        <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
          <div className='flex justify-center md:justify-end '>
            <a href='#' className=' text-primary btn md:border-2 border-primary hover:bg-primary hover:text-white transition ease-out duration-500'>
              Log in
            </a>
            <a href='#' className=' text-primary hover:bg-primary hover:text-white  btn ml-2 md:border-2 border-primary transition ease-out duration-500'>
              Sign up
            </a>
          </div>
          <header>
            <h2 className='text-gray-700 py-1 text-6xl font-semibold'>Recipes</h2>
            <h3 className='text-2xl font-semibold'>For Ninjas</h3>
          </header>
          <div className=''>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
            <div className='mt-8  grid lg:grid-cols-3 gap-10'>
              {/* cards */}
              <div className='card hover:shadow-lg'>
                <img className='w-full h-32 sm:h-48 object-cover' src='https://plus.unsplash.com/premium_photo-1728412897664-e7587de51ecf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D' alt='' />
                <div className='m-4'>
                  <span className='font-bold'>5 Bean Chilli Stew</span>
                  <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                </div>
                <div className='badge'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6 w-5 inline-block'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                  </svg>

                  <span className=''>25 min</span>
                </div>
              </div>
              <div className='card hover:shadow-lg'>
                <img className='w-full h-32 sm:h-48 object-cover' src='https://images.unsplash.com/photo-1585417791023-a5a6164b2646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D' alt='' />
                <div className='m-4'>
                  <span className='font-bold'>Veg Noodles</span>
                  <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                </div>
                <div className='badge'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6 w-5 inline-block'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                  </svg>

                  <span className=''>25 min</span>
                </div>
              </div>
              <div className='card hover:shadow-lg'>
                <img className='w-full h-32 sm:h-48 object-cover' src='https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3Vycnl8ZW58MHx8MHx8fDA%3D' alt='' />
                <div className='m-4'>
                  <span className='font-bold'>Curry</span>
                  <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                </div>
                <div className='badge'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6 w-5 inline-block'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                  </svg>

                  <span className=''>25 min</span>
                </div>
              </div>
            </div>

            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
            <div className='mt-8'>{/* cards */}</div>
            <div className='flex justify-center'>
              <div className='bg-secondary-100 text-secondary-200 btn hover:shadow-inner transition transform hover:scale-105 hover:bg-opacity-50  ease-out duration-300'>Load more</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Login
