import Link from "next/link"

export const metadata = {
    title: 'Projects',
    description: 'A few of the projects I have worked on.',
}

const arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    )
}

export default function page() {

    return (
        <div className="bg-gray-200/50 p-5 space-y-5">
            <div>
                <div>
                    <a href="https://www.loomlogic.app/" className="underline font-extrabold text-3xl">Loom Logic <arrow /></a>
                </div>
                A web app for creating and editing weaving drafts. Built with React and Pixijs. <a href="https://github.com/ejmelias/loom-logic" className="underline">Github</a>
            </div>
            <div>
                <div>
                    <a href="https://www.ironcrowstudio.ca/" className="underline font-extrabold text-3xl">Iron Crow Studio</a>
                </div>
                A simple website for my metalworking studio. Built with react, nextjs and threejs. <a href="https://github.com/ejmelias/ironcrow" className="underline">Github</a>
            </div>
            <div>
                <div>
                    <a href="https://www.pawpromenade.com/" className="underline font-extrabold text-3xl">Paw & Promenade</a>
                </div>
                A website for NYC based dog walking service, Paw & Promenade.
            </div>
            <div>
                <div>
                    <Link href="/experiments" className="underline font-extrabold text-3xl">Experiments</Link>
                </div>
                Miscellaneous graphical and shader experiments with threejs.     
            </div>
        </div>
    )
}

