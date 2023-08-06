import SocialIcon from '@/components/SocialIcon'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='z-10 mt-auto p-6'>
            <div className="mt-16 flex flex-col items-end">
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="mail" href={'mailto:example@email.com'} size="24" />
                    <SocialIcon kind="github" href={'http://github.com'} size="24" />
                    <SocialIcon kind="linkedin" href={'http://linkedin.com'} size="24" />
                </div>
                <div className='mb-3 w-36 border border-[#45517a] relative'>
                    <div className='w-12 h-3 bg-[#45517a] animate-slide' />
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-[#45517a]">
                    <div>{'James Elias'}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                </div>
            </div>
        </footer>
    )
}
