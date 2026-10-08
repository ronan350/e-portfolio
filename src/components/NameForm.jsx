import { useState } from "react";

export default function NameForm({ onContinue }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (first.trim() && last.trim()) onContinue(`${first.trim()} ${last.trim()}`);
  };
  return (
    <form className="name-box" onSubmit={submit}>
      <h2>Enter Your Name</h2>
      <input type="text" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} required />
      <input type="text" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} required />
      <button type="submit">Continue</button>
    </form>
  );
}
