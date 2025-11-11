import React from 'react'

const Contact = () => {
    return (
        <div 
            id='contact'
            className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mx-4 xs:mx-6 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 my-6 sm:my-8 md:my-10 font-mono" 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-easing="ease-in-sine"
        >
            {/* Title Section */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl mb-4 xs:mb-5 font-bold text-white text-center">
                <span className="text-primaryColor">05.&nbsp;</span>
                <span>Contact</span>
            </h1>
            
            {/* Contact Form */}
            <div className='w-full xs:w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] border border-primaryColor p-4 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl mx-auto'>
                <div className='text-xl xs:text-2xl sm:text-3xl text-white font-semibold my-3 xs:my-4 text-center xs:text-left'>
                    Let's Connect
                </div>
                <form className="flex flex-col gap-3 xs:gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 xs:p-3 rounded-lg border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:border-[#64FFDA] text-sm xs:text-base"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 xs:p-3 rounded-lg border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:border-[#64FFDA] text-sm xs:text-base"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-2 xs:p-3 rounded-lg border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:border-[#64FFDA] text-sm xs:text-base"
                    />
                    <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full p-2 xs:p-3 rounded-lg border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:border-[#64FFDA] text-sm xs:text-base resize-vertical"
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-2 w-full bg-[#64FFDA] text-[#0f172a] font-semibold py-2 xs:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#52e6c9] transition-all text-sm xs:text-base"
                    >
                        Send
                    </button>
                </form>
            </div>
            
            {/* Copyright Footer */}
            <div className="mt-8 xs:mt-12 sm:mt-16 text-center text-gray-400 text-base xs:text-lg sm:text-xl leading-relaxed">
                Nguyen Anh Quoc<br />
                Copyright © 2025 Nguyen Anh Quoc | All Rights Reserved
            </div>
        </div>
    )
}

export default Contact