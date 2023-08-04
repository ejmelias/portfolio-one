import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="z-10 mb-10 text-center md:mb-0 md:grid-cols-4 md:grid hidden">
            <Link
                href={'/about'}
                className="group rounded-lg px-5 py-4 transition-colors hover:bg-gray-100/75 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >   
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    About
                </h2>
            </Link>

            <Link
                href={"/services"}
                className="group rounded-lg px-5 py-4 transition-colors hover:bg-gray-100/75 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Services
                </h2>
            </Link>

            <Link
                href={'/blog'}
                className="group rounded-lg px-5 py-4 transition-colors hover:bg-gray-100/75 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Blog
                </h2>
            </Link>

            <Link
                href={"/contact"}
                className="group rounded-lg px-5 py-4 transition-colors hover:bg-gray-100/75 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Contact
                </h2>
            </Link>
        </nav>
    )
}