import { Container, PostList } from "@/components/shared";
import { Suspense } from "react";

export default async function Posts() {
    return (
        <Container className="mt-10">
            <Suspense fallback="Loading...">
                <PostList />
            </Suspense>
        </Container>
    );
}
