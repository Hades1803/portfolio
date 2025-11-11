import React from 'react'

const Mail = () => {
  return (
    <div className='hidden lg:flex items-center gap-10 text-textColor fixed bottom-72 -right-40 rotate-90'>
        <a href='mailto:anhquoc3241@gmail.com' className='font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out'>
            anhquoc3241@gmail.com
        </a>
        <hr className='border-[2px] bg-textColor border-textColor w-40 rounded-full'/>
    </div>
  )
}

export default Mail