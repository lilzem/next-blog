import { cn } from "@/lib/utils";
import { FC } from "react";
import { Title } from "./title";

interface PostProps {
    className?: string;
    title: string;
    text: string;
}

export const Post: FC<PostProps> = ({ className, title, text }) => {
    return (
        <div className={cn("flex-col gap-4", className)}>
            <Title className="font-bold" size="xl" text={title} />

            <Title size="sm" text={text} />
        </div>
    );
};
