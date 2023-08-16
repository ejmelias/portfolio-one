import { getPostData } from "@/lib/posts";

export default async function Page({ params }) {
    const postData = await getPostData(params.id);
    return (
        <div className="bg-gray-200/50 p-5">
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    );
}