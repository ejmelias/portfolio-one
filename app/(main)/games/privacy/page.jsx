import Link from "next/link"

export const metadata = {
    title: 'Privacy',
    description: 'Privacy Policy',
}

export default function page() {

    return (
        <div className="bg-gray-200/50 p-5 space-y-8 border-midnight/30 border">
            Maze of Moros does not collect any user data. 
            <br/>
            Celesto does not collect any user data.
        </div>
    )
}

