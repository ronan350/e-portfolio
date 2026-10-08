import { useState } from "react";

const FIELDS = [
  ["First Name", "text", "fname"], ["Last Name", "text", "lname"], ["Password", "password", "password"],
  ["Email", "email", "email"], ["Number", "number", "age"], ["Birthday", "date", "birthday"],
  ["Month Picker", "month", "month"], ["Week Picker", "week", "week"],
  ["Favorite Color", "color", "favcolor"], ["Website URL", "url", "website"],
];
const NATIONALITY = ["Bading", "Yobmot", "Japanezz", "Chaynes", "Bisaya", "Engot"];

export default function Forms() {
  const [result, setResult] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {};
    new FormData(e.target).forEach((v, k) => {
      if (k === "password") v = "••••••";
      data[k] = data[k] ? data[k] + ", " + v : v;
    });
    setResult(data);
  };
  return (
    <section>
      <h2 id="forms">5. HTML Forms</h2>
      <form onSubmit={onSubmit} onReset={() => setResult(null)}>
        {FIELDS.map(([label, type, name]) => (
          <div key={name}><b>{label}:</b><br /><input type={type} name={name} /><br /><br /></div>
        ))}
        <b>Radio Buttons:</b><br />
        <label><input type="radio" name="gender" value="male" /> Male</label><br />
        <label><input type="radio" name="gender" value="female" /> Female</label><br /><br />
        <b>Checkboxes:</b><br />
        <label><input type="checkbox" name="skill" value="miss mo?" /> miss mo?</label><br />
        <label><input type="checkbox" name="skill" value="miss ka ba?" /> miss ka ba?</label><br /><br />
        <b>Nationality:</b><br />
        <select name="nationality">{NATIONALITY.map((n) => <option key={n}>{n}</option>)}</select><br /><br />
        <b>Textarea:</b><br />
        <textarea name="message" rows={5} cols={30} /><br /><br />
        <b>Submit and Reset:</b><br />
        <input type="submit" value="Submit" /> <input type="reset" value="Reset" />
      </form>
      {result && (
        <div className="result">
          <b>Form submitted:</b>
          <ul>{Object.entries(result).map(([k, v]) => <li key={k}>{k}: {v || "(empty)"}</li>)}</ul>
        </div>
      )}
    </section>
  );
}
