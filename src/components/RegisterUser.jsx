import { useState, useRef } from "react";

function RegisterUser({ addUser }) {
    const [form, setForm] = useState({
        name: "", email: "", phone: "",
        rating: "", verified: false
    });
    const [error, setError] = useState("");
    const nameRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = () => {
        if (!form.name.trim()) {
            setError("Name cannot be empty");
            return;
        }
        if (form.rating < 1 || form.rating > 5) {
            setError("Rating must be between 1 and 5");
            return;
        }
        setError("");
        addUser({
            id: Date.now(),
            name: form.name,
            email: form.email,
            phone: form.phone,
            website: "",
            rating: Number(form.rating),
            verified: form.verified
        });
        setForm({ name: "", email: "", phone: "", rating: "", verified: false });
        nameRef.current.focus();
    };

    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input ref={nameRef} name="name" type="text"
                   placeholder="Name" value={form.name} onChange={handleChange} />
            <input name="email" type="text"
                   placeholder="Email" value={form.email} onChange={handleChange} />
            <input name="phone" type="text"
                   placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="rating" type="number"
                   placeholder="Rating" value={form.rating} onChange={handleChange} />
            <label>
                <input name="verified" type="checkbox"
                       checked={form.verified} onChange={handleChange} />
                Verified
            </label>
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default RegisterUser;