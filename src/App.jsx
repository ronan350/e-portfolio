import { useState } from "react";
import NameForm from "./components/NameForm";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BasicTags from "./components/BasicTags";
import Formatting from "./components/Formatting";
import Lists from "./components/Lists";
import Tables from "./components/Tables";
import Forms from "./components/Forms";

export default function App() {
  const [name, setName] = useState("");
  if (!name) return <NameForm onContinue={setName} />;
  return (
    <>
      <Header name={name} />
      <Navbar />
      <div className="container">
        <BasicTags />
        <Formatting />
        <Lists />
        <Tables />
        <Forms />
      </div>
    </>
  );
}
