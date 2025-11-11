import { useEffect, useState } from 'react'
import { Info } from '../User'
// @ts-ignore
import DOTS from "vanta/src/vanta.dots"
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk"
import Typewriter from "typewriter-effect"
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ResumeViewer from './ResumeViewer'

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const [dots, setdots] = useState<any>(null)
    const [trunk, setTrunk] = useState<any>(null)
    
    useEffect(() => {
        if (!dots) {
            setdots(DOTS({
                el: "#your-element-selector",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x14479f,
                color2: 0x204aff,
                size: 2.8,
                spacing: 20,
                backgroundColor: 0x112240,
                showLines: false
            }))
        }
        if (!trunk) {
            setTrunk(
                TRUNK({
                    el: "#photo",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x64FFDA,
                    spacing: 0,
                    backgroundColor: 0x112240,
                    chaos: 4.00
                })
            )
        }
        return () => {
            if (dots) dots.destroy()
            if (trunk) trunk.destroy()
        }
    }, [dots, trunk])

    return (
        <>
            <div className='!z-0 flex flex-col lg:flex-row px-4 xs:px-8 sm:px-12 md:px-16 lg:px-16 xl:px-20 h-auto lg:h-[80vh] min-h-screen lg:min-h-0 overflow-hidden font-mono mt-8 lg:mt-12 py-8 lg:py-0' id='your-element-selector about'>
                {/* Text Content */}
                <div className='w-full lg:w-3/5 flex flex-col order-2 lg:order-1 lg:ml-12 xl:ml-20 mt-8 lg:mt-0'>
                    <div className='text-xl xs:text-2xl sm:text-3xl text-primaryColor'>Hi, I am</div>
                    <div className='text-white text-3xl xs:text-4xl sm:text-5xl md:text-[4.25rem] font-extrabold leading-tight mt-2'>
                        {Info.name}
                    </div>
                    <div className='text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl flex flex-wrap items-center mt-4'>
                        I'm a&nbsp;
                        <span className='text-primaryColor min-h-[1.5em]'>
                            <Typewriter 
                                options={{ 
                                    strings: Info.stack, 
                                    autoStart: true, 
                                    loop: true 
                                }} 
                            />
                        </span>
                    </div>
                    <div className='text-textColor text-base xs:text-lg sm:text-xl text-justify font-semibold my-6 lg:my-8 leading-relaxed'>
                        {Info.bio}
                    </div>
                    <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 mt-4">
                        <Button
                            onClick={open}
                            variant='filled'
                            color='#64FFDA'
                            size='md'
                            className='!text-bgColor !w-full xs:!w-fit justify-center'
                        >
                            Check Resume
                        </Button>

                        <Button
    component='a'
    href={`${process.env.PUBLIC_URL}/portfolio/asset/CV-NguyenAnhQuoc-Intern.pdf`}
    download
    variant='outline'
    color='#64FFDA'
    size='md'
    className='!w-full xs:!w-fit !border-primaryColor !text-primaryColor justify-center'
>
    Download CV
</Button>
                    </div>
                </div>

                {/* Photo Section */}
                <div className="w-full lg:w-2/5 flex justify-center items-center order-1 lg:order-2">
                    <div
                        className="h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[50vh] w-[300px] xs:w-[350px] sm:w-[400px] md:w-[450px] lg:w-[25vw] max-w-[90vw] flex justify-center items-center rounded-full mx-auto lg:mx-8 xl:mx-14 overflow-hidden mt-4 lg:mt-0"
                        id="photo"
                    >
                        <img
    className="w-[90%] rounded-full z-10 object-cover"
    src={`${process.env.PUBLIC_URL}/portfolio/asset/user-avater.jpg`}
    alt="User Avatar"
/>
                    </div>
                </div>
            </div>
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}

export default About