const ORDERED = [
  ["Ordered List – Numbers", "1", ["Si", "Runan", "Ito"]],
  ["Ordered List – Uppercase Letters", "A", ["Sarap", "Ko", "Naman"]],
  ["Ordered List – Lowercase Letters", "a", ["Ronan", "Joshua", "Soriano"]],
  ["Ordered List – Roman Numerals", "I", ["Cute", "Si", "Soriano"]],
  ["Ordered List – Lowercase Roman", "i", ["Ronan", "Cute", "Super"]],
];

export default function Lists() {
  return (
    <section>
      <h2 id="lists">3. Beautiful List Examples</h2>
      <h3>Unordered List (Square)</h3>
      <ul style={{ listStyleType: "square" }}>
        {["Wow", "Napaka", "Astig"].map((x) => <li key={x}>{x}</li>)}
      </ul>
      {ORDERED.map(([title, type, items]) => (
        <div key={title}>
          <h3>{title}</h3>
          <ol type={type}>{items.map((x) => <li key={x}>{x}</li>)}</ol>
        </div>
      ))}
      <h3>Description List</h3>
      <dl>
        <dt>Coffee</dt><dd>- maenet na kapeh</dd>
        <dt>Milk</dt><dd>- malameg na kapeh</dd>
      </dl>
      <br />
    </section>
  );
}
