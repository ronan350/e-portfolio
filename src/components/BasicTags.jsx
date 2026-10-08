const TAGS = [
  ["<html>", "Main container of the webpage.", "<html>...</html>"],
  ["<head>", "Stores page info.", "<head>...</head>"],
  ["<title>", "Title on browser tab.", "<title>My Page</title>"],
  ["<body>", "Visible content.", "<body>Hello</body>"],
  ["<h1>", "Main heading.", "<h1>Welcome!</h1>"],
  ["<p>", "Paragraph text.", "<p>This is text.</p>"],
  ["<br>", "Line break.", "Line1<br>Line2"],
  ["<a href>", "Link.", '<a href="#">Click Me</a>'],
  ["<img src>", "Image.", '<img src="pic.jpg">'],
];
const BASE = import.meta.env.BASE_URL;

export default function BasicTags() {
  return (
    <section>
      <h2 id="basic">1. Basic HTML Tags &amp; Their Uses</h2>
      {TAGS.map(([tag, use, example]) => (
        <div key={tag}>
          <p><b>{tag}</b> – {use}<br /><b>Example:</b> {example}</p>
          {tag === "<a href>" && <a href="https://nvsu.edu.ph/"> Click Mo May Lalabas </a>}
          {tag === "<img src>" && (
            <>
              <img src={BASE + "buen.JPG"} alt="Si Ashley Buen" /><br />
              <img src={BASE + "manuel.JPG"} alt="Si Glen Manuel" />
            </>
          )}
        </div>
      ))}
      <br />
    </section>
  );
}
