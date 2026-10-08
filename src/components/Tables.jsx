const ROWS = [["Ana", "BSIT", 20], ["Mark", "BSCS", 21]];

export default function Tables() {
  return (
    <section>
      <h2 id="tables">4. Styled Tables</h2>
      <table className="tbl collapse">
        <thead><tr><th>Name</th><th>Course</th><th>Age</th></tr></thead>
        <tbody>
          {ROWS.map(([n, c, a]) => <tr key={n}><td>{n}</td><td>{c}</td><td>{a}</td></tr>)}
        </tbody>
      </table>
      <h3>Table with Colspan</h3>
      <table className="tbl">
        <thead><tr><th colSpan={2}>Telephone</th></tr></thead>
        <tbody><tr><td>55577854</td><td>55577855</td></tr></tbody>
      </table>
      <h3>Table with Rowspan</h3>
      <table className="tbl">
        <tbody>
          <tr><th rowSpan={2}>Telephone</th><td>55577854</td></tr>
          <tr><td>55577855</td></tr>
        </tbody>
      </table>
      <br />
    </section>
  );
}
