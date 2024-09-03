import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import Link from "next/link";

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={cn("border-b", className)}>
            <Container className="flex items-center justify-between py-8 px-3">
                <Image src="/logo.png" alt="Logo" width={35} height={35} />

                <div className="flex justify-between itemc-center gap-4">
                    <Link href="/">
                        <Button variant="link" className="text-lg">
                            Home
                        </Button>
                    </Link>
                    <Link href="/posts">
                        <Button variant="link" className="text-lg">
                            Posts
                        </Button>
                    </Link>
                </div>
            </Container>
        </header>
    );
};
