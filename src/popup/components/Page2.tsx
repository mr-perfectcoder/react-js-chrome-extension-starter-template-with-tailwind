import React from 'react'

const Page2 = ({ setActivePage }) => {
    return (
        <>
            <div className='flex flex-row justify-between items-center p-4'>
            <p className='cursor-pointer underline' onClick={() => setActivePage("home")}>Back</p>
            </div>
            <div className='h-[1px] w-full bg-gray-200' />
            <div className='flex flex-col justify-center items-center h-[350px] p-4'>
                Page 2
            </div>
        </>
    )
}

export default Page2