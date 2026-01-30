import {useEffect, useState} from "react";

function UserProfile ({userId}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const refreshUser = () => {
        const randomId = Math.floor(Math.random() * 10) + 1;
        setUser(null);
        setError(null);
        setLoading(true);
        window.dispatchEvent(
            new CustomEvent("changeUser", {detail: randomId})
        );
    };

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetch(` https://jsonplaceholder.typicode.com/users/ ${userId}`, {
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch user");
                }
                return res.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((err) => {
                if(err.name !== "AbortError") {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => {
            controller.abort();
        };
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        user && (
            <div>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <button onClick={refreshUser}>Refresh</button>
            </div>
        )
    );
}

export default UserProfile;