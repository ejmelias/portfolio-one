
export const metadata = {
    title: 'Contact',
    description: 'Get in contact with me.',
}

export default function page() {

    return (
        <div className="text-center bg-gray-200/50 p-5 text-3xl space-y-5 border-midnight/30 border">
            <div>Get in touch:</div>
            <div><a href="mailto:ejmelias@gmail.com" className="underline">Email</a></div>
            <div><a href="https://github.com/ejmelias" className="underline">Github</a></div>
        </div>
    )
}