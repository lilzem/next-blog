import { FC } from "react";
import { Button } from "../ui";
import Link from "next/link";
import { cn } from "@/lib/utils";
import prisma from "@/lib/db";

interface PostListProps {
    className?: string;
}

export const PostList: FC<PostListProps> = async ({ className }) => {
    const posts = await prisma.post.findMany();

    return (
        <div className={cn("flex flex-col gap-3 justify-center", className)}>
            {posts.map((item) => (
                <Link href={`/posts/${item.slug}`}>
                    <Button
                        className="px-0 text-xl"
                        variant="link"
                        key={item.id}
                    >
                        {item.title}
                    </Button>
                </Link>
            ))}
        </div>
    );
};
