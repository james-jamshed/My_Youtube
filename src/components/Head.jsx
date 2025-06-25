import React from 'react'

const Head = () => {
    return <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1 ' >
            <img className='h-8'
                alt='menu'
                src='https://www.svgrepo.com/show/506800/burger-menu.svg'
            />
            <img className='h-8 mx-2'
                alt='logo'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1E7FaDe9xcnRLpC0_wa5ZN3z0n9dYeVVq4w&s'
            />
        </div>
        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-400 px-4 py-2 rounded focus:outline-none focus:border-gray-500 rounded-l-full' type="text" placeholder='search' />
            <button className='border border-gray-400 py-2 px-5 bg-gray-200 rounded-r-full'>🔍</button>
        </div>
        <div>
            <img className='h-8'
                alt='user'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s'
            />
        </div>
  </div>
}

export default Head