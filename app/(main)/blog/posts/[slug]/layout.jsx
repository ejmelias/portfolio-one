import Link from "next/link"

export default function layout({ children }) {
    return (
        <div className="bg-gray-200/50 p-5 border border-midnight/30 ">
            <div>
                <Link href={'/blog'} className="flex flex-row border border-midnight/50 max-w-min items-center px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="square" strokeLinejoin="square" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
                </Link>
            </div>
            {children}
        </div>
    )
}