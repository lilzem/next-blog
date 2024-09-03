import { Container, PostList, Title } from "@/components/shared";
import PostForm from "@/components/shared/post-form";
import { Suspense } from "react";

export default async function Posts() {
    return (
        <Container className="mt-10 px-5 gap-5">
            <PostForm />

            <Title className="font-bold mb-5" text="My posts" size="2xl" />

            <Suspense fallback="Loading...">
                <PostList />
            </Suspense>
        </Container>
    );
}
