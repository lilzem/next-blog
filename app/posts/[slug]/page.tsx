import { Container, Post } from "@/components/shared";
import prisma from "@/lib/db";

export default async function PostPage({
    params,
}: {
    params: { slug: string };
}) {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        },
    });

    return (
        <Container className="mt-10">
            <Post
                title={post?.title as string}
                text={post?.content as string}
            />
        </Container>
    );
}
