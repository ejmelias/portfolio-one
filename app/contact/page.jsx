
export const metadata = {
    title: 'Contact',
    description: 'r3f + next.js contact information',
}

export default function page() {

    return (
        <div className="text-center">
            <div className="group">
                Phone: (555)555-5555
            </div>
            <div className="group">
                email: 123@example.com
            </div>
            <div className="group">
                map
            </div>
        </div>
    )
}