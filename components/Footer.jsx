import SocialIcon from '@/components/SocialIcon'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='z-10 mt-auto'>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="mail" href={'mailto:example@email.com'} size="24" />
                    <SocialIcon kind="github" href={'http://github.com'} size="24" />
                    <SocialIcon kind="facebook" href={'http://facebook.com'} size="24" />
                    <SocialIcon kind="youtube" href={'http://youtube.com'} size="24" />
                    <SocialIcon kind="linkedin" href={'http://linkedin.com'} size="24" />
                    <SocialIcon kind="twitter" href={'http://twitter.com'} size="24" />
                    <SocialIcon kind="instagram" href={'http://instagram.com'} size="24" />
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>{'Author Name'}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">{'Title'}</Link>
                </div>
            </div>
        </footer>
    )
}
