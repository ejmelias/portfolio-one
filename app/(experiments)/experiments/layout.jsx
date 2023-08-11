import '@/app/globals.css'
import { DotGothic16, Questrial, Silkscreen, Libre_Barcode_39_Extended, Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'
import ExperimentCanvas from '@/components/ExperimentCanvas'

const dotgothic = DotGothic16({ subsets: ['latin'], weight: '400' })
const questrial = Questrial({ subsets: ['latin'], weight: '400' })
const silkscreen = Silkscreen({ subsets: ['latin'], weight: '400' })
const barcode = Libre_Barcode_39_Extended({ subsets: ['latin'], weight: '400' })
const japanese = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata = {
    title: 'Expermiments',
    description: 'Graphical experiments with Three.js',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={silkscreen.className}>
                <main className="flex flex-col min-h-full items-start text-midnight">
                    <ExperimentCanvas>
                        {children}
                    </ExperimentCanvas>
                    <div className='z-20 p-6 flex flex-col'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/experiments/grid'}>Grid</Link>
                    </div>
                </main>
            </body>
        </html>
    )
}