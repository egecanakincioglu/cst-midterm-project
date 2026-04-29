// Student: Egecan Akincioglu | ID: 132492.
import { useState, useEffect, useCallback, useMemo } from "react";
import UserCard from "./components/UserCard";
import RegisterUser from "./components/RegisterUser";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = () => {
        setLoading(true);
        setError(null);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data.map(u => ({
                    ...u,
                    rating: 5,
                    verified: false
                })));
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    useEffect(() => { fetchUsers(); }, []);

    const addUser = useCallback((user) => {
        setUsers(prev => [...prev, user]);
    }, []);

    const averageRating = useMemo(() => {
        if (users.length === 0) return 0;
        return users.reduce((sum, u) => sum + u.rating, 0) / users.length;
    }, [users]);

    if (loading) return <p> Loafing...</p>;
    if (error) return (
        <div>
            <p>Error: {error}</p>
            <button onClick={fetchUsers}>Retry</button>
        </div>
    );

    return (
        <>
            <div>
                <h1>User Directory</h1>
                <p>Average Rating: {averageRating}</p>
                <RegisterUser addUser={addUser} />
                {users.map(u => (
                    <UserCard key={u.id} user={u} />
                ))}
            </div>
        </>
    );
}

export default App;