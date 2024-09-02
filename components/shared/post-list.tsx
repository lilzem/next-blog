import { getPosts, Post } from "@/app/api/posts";
import { FC } from "react";
import { Button } from "../ui";
import Link from "next/link";

interface PostListProps {
    className?: string;
}

export const PostList: FC<PostListProps> = async ({ className }) => {
    const posts: Post[] = await getPosts();

    console.log(posts);

    return (
        <div className="flex-col gap-3 justify-center">
            {posts.map((item) => (
                <Link href={`/posts/${item.id}`}>
                    <Button variant="link" key={item.id} title={item.title} />
                </Link>
            ))}
        </div>
    );
};
