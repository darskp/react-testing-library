import { useState } from "react";

const UserForm = ({ onUserAdd }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("NAME", name);
        console.log("Email", email);
        onUserAdd({name,email})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name : &nbsp;
                </label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">
                    Email : &nbsp;
                </label>
                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button>Add User</button>
        </form>
    );
}

export default UserForm;