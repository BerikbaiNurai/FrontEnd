import { GetServerSideProps } from "next";

interface Props {
    time: string;
}

export default function AboutSSR ({ time }: Props) {
    return (
        <main>
            <h1>About page (SSR) </h1>
            <p>This page renders on every request.</p>
            <p>Generated at: {time}</p>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            time: new Date(). toISOString(),
        },
    };
};