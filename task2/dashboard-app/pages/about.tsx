import { useState, useEffect } from "react";

export default function About() {
    const [clientTime, setClientTime] = useState("");

    useEffect(() => {
        setClientTime(new Date().toISOString());
    }, []);

    return (
        <main>
            <h1>About page</h1>
            <p>This page is statically generated.</p>

            <p>Generated at: {clientTime}</p>
        </main>
    );
}