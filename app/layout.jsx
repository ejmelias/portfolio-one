

import './globals.css'
import { DotGothic16, Questrial ,Silkscreen, Libre_Barcode_39_Extended, Noto_Sans_JP } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Background from '@/components/Background'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Bars from '@/components/Bars'
import RandomText from '@/components/RandomText'

const dotgothic = DotGothic16({ subsets: ['latin'], weight: '400' })
const questrial= Questrial({ subsets: ['latin'], weight: '400' })
const silkscreen = Silkscreen({ subsets: ['latin'], weight: '400' })
const barcode = Libre_Barcode_39_Extended({ subsets: ['latin'], weight: '400' })
const japanese = Noto_Sans_JP({subsets: ['latin']})

export const metadata = {
    title: 'JAMES ELIAS',
    description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={questrial.className}>
                <main className="flex flex-col min-h-full items-center text-midnight">
                    
                    <Background />
                    
                    <div className=" z-20 h-full w-full flex-col self-start">
                        {/*Title*/}
                        <div className="p-6 flex md:justify-start justify-between items-center static md:bg-none">
                            <Link
                                className="flex flex-col pointer-events-auto md:p-0"
                                href="/"
                            >
                                <h1 className='text-3xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-midnight to-70%'>JAMES ELIAS</h1>
                                <div className='text-[0.25em] md:text-xs lg:text-base tracking-[1.5em]'>TACTICAL ESPIONAGE ACTION</div>
                            </Link>
                            <div className={silkscreen.className}>
                                <MobileNav />
                            </div>
                        </div>                 
                        <div className={`relative ${silkscreen.className}`}>
                            <Nav />
                            <div className='hidden md:block absolute top-10 right-6'>
                                <Bars width={150}/>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block absolute top-0 right-0 p-6 z-10'>
                        <div className={`text-xs ${barcode.className}`}>
                            acd&nbsp;i5&nbsp;1qqacd&nbsp;i5&nbsp;1qq
                        </div>
                        <div className={`text-xs justify-end flex flex-row ${silkscreen.className}`}>
                            0x
                            <RandomText text={'000000'} interval={1500} />
                        </div>
                    </div>

                    {/*content*/}
                    <div className={`z-10 max-w-5xl flex-grow flex items-center justify-center ${dotgothic.className}`}>
                        <div className='p-5 text-2xl'>
                            {children}
                        </div>
                    </div>
                    
                    <div className={`flex flex-row z-10 ${silkscreen.className} w-full justify-between items-end`}>
                        <div className='p-6'>
                            <div className='flex flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                                <div className={japanese.className}>
                                    ハザード
                                </div>   
                            </div>
                            <div className='h-1 w-24  bg-midnight' />
                            <div className='h-1 w-16  bg-midnight' />
                            <div className='h-1 w-32  bg-midnight' />
                            <div className={`${barcode.className}`}>
                                ab &nbsp; e&nbsp; dkf
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </main>
            </body>
        </html>
    )
}
