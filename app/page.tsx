import { Container, Title } from "@/components/shared";

export default function Home() {
    return (
        <Container className="mt-10 flex-col gap-6 justify-center px-3 ">
            <Title
                className="font-bold text-center"
                size="2xl"
                text="Welcome to my Blog!"
            />
            <div className="text-2xl leading-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur possimus optio quas eveniet cumque ipsam deleniti
                doloribus cupiditate vel obcaecati laboriosam adipisci, fugiat
                magni distinctio quos quibusdam deserunt? Magni, similique!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur possimus optio quas eveniet cumque ipsam deleniti
                doloribus cupiditate vel obcaecati laboriosam adipisci, fugiat
                magni distinctio quos quibusdam deserunt? Magni, similique!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur possimus optio quas eveniet cumque ipsam deleniti
                doloribus cupiditate vel obcaecati laboriosam adipisci, fugiat
                magni distinctio quos quibusdam deserunt? Magni, similique!
            </div>
        </Container>
    );
}
