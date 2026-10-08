export default function Header({ name }) {
  return (
    <div className="header">
      <h1>ECHTML PURTPOLYO</h1>
      <p>
        Welcome, <span style={{ fontWeight: "bold" }}>{name}</span>!<br />
        An HTML5 project showcasing my learning progress..
      </p>
    </div>
  );
}
