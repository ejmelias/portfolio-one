import SocialIcon from '@/components/SocialIcon'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='z-10 mt-auto p-6'>
            <div className="mt-16 flex flex-col items-end">
                <div className=" flex space-x-4">
                    <SocialIcon kind="mail" href={'mailto:example@email.com'} size="24" />
                    <SocialIcon kind="github" href={'http://github.com'} size="24" />
                    <SocialIcon kind="linkedin" href={'http://linkedin.com'} size="24" />
                </div>

                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="square" strokeLinejoin="square" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg>

                    <div className='w-28 md:w-36 border border-midnight relative'>
                        <div className='w-9 h-1 md:w-12 md:h-2 bg-midnight animate-slide' />
                    </div>
                </div>
                <div className="mb-2 flex space-x-1 md:space-x-2 text-xs md:text-sm text-midnight">
                    <div>{'James Elias'}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                </div>
            </div>
        </footer>
    )
}
