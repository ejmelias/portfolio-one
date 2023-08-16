import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
    title: 'Blog',
    description: 'r3f + next.js blog',
}

export default async function page() {
    const allPostsData = await getSortedPostsData()
    return (
        <div className="text-center bg-gray-200/50 p-5">
            {allPostsData.map(({ id, date, title }) => (
                <li className='' key={id}>
                    <Link href={`blog/posts/${id}`}>{title}</Link>
                    <br />
                    <small className=''>
                        {date}
                    </small>
                </li>

            ))}
        </div>
    )
}