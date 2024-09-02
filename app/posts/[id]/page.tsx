import { getPost } from "@/app/api/posts";
import { Post } from "@/components/shared";
import { useRouter } from "next/router";

export default async function PostPage() {
    const router = useRouter();

    const id = router.query.id;

    const post = await getPost(id as string);

    return <Post title={post.title} text={post.text} />;
}
