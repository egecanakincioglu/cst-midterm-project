function UserCard({ user }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px" }}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Rating: {user.rating}</p>
            <p>Verified: {user.verified ? "Yes" : "No"}</p>
            {user.verified === true && <p>Verified User</p>}
            {user.rating >= 4 && <p>Top Rated</p>}
        </div>
    );
}

export default UserCard;