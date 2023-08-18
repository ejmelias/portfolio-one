import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export const metadata = {
    title: 'Blog',
    description: 'James\' developer blog',
}

function PostCard(post) {
    return (
        <div className="mb-8">
            <h2 className="mb-1 text-xl">
                <Link href={`/blog/${post.url}`}>
                    {post.title}
                </Link>
            </h2>
            <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
        </div>
    )
}

export default function Home() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <div className="mx-auto max-w-xl p-5 divide-y divide-midnight/50 bg-gray-200/50 border-midnight/30 border">
            <h1 className="mb-8 text-center text-2xl">All Posts</h1>
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    )
}