import { revalidatePath } from "next/cache";
import { useFormStatus } from "react-dom";

import { cn, toKebabCase } from "@/lib/utils";
import { Container } from "./container";
import { Button, Input, Textarea } from "../ui";
import prisma from "@/lib/db";

interface PostFormProps {
    className?: string;
}

export default function PostForm({ className }: PostFormProps) {
    const addPost = async (formData: FormData) => {
        "use server";

        await prisma.post.create({
            data: {
                slug: toKebabCase(formData.get("title") as string),
                title: formData.get("title") as string,
                content: formData.get("content") as string,
            },
        });

        revalidatePath("/posts");
    };

    return (
        <Container className={cn("items-center max-w-[500px]", className)}>
            <form action={addPost} className="flex flex-col gap-4 items-center">
                <Input placeholder="Title" name="title" />
                <Textarea
                    className="resize-none"
                    placeholder="Type your post here..."
                    name="content"
                />

                <Button className="px-10 py-5 text-lg">Add Post</Button>
            </form>
        </Container>
    );
}
