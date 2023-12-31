import Link from "next/link"

export const metadata = {
    title: 'Projects',
    description: 'A few of the projects I have worked on.',
}

function Arrow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    )
}

export default function page() {

    return (
        <div className="bg-gray-200/50 p-5 space-y-8 border-midnight/30 border">
            <div>
                <div className="flex flex-row items-center">
                    <a href="https://www.loomlogic.app/" target="_blank" rel="noopener noreferrer" className="underline font-extrabold text-3xl">Loom Logic </a>
                    <Arrow />
                </div>
                A web app for creating and editing weaving drafts. Built with React and Pixijs. <a href="https://github.com/ejmelias/loom-logic" className="underline">Github</a>
            </div>
            <div>
                <div className="flex flex-row items-center" >
                    <a href="https://www.ironcrowstudio.ca/" target="_blank" rel="noopener noreferrer" className="underline font-extrabold text-3xl">Iron Crow Studio</a>
                    <Arrow />
                </div>
                A simple website for my metalworking studio. Built with react, nextjs and threejs. <a href="https://github.com/ejmelias/ironcrow" className="underline">Github</a>
            </div>
            <div>
                <div className="flex flex-row items-center">
                    <a href="https://www.pawpromenade.com/" target="_blank" rel="noopener noreferrer"  className="underline font-extrabold text-3xl">Paw & Promenade</a>
                    <Arrow />
                </div>
                A website for NYC based dog walking service, Paw & Promenade.
            </div>
            <div>
                <div className="flex flex-row items-center">
                    <Link href="/experiments" className="underline font-extrabold text-3xl">Experiments</Link>
                    <Arrow />
                </div>
                Miscellaneous graphical and shader experiments with threejs.     
            </div>
        </div>
    )
}

