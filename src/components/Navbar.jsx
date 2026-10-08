const LINKS = [["basic", "Basic HTML"], ["formatting", "Formatting"], ["lists", "Lists"], ["tables", "Tables"], ["forms", "Forms"]];

export default function Navbar() {
  return (
    <div className="navbar">
      {LINKS.map(([id, label]) => <a key={id} href={"#" + id}>{label}</a>)}
    </div>
  );
}
