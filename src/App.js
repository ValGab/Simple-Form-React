import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [results, setResults] = useState(false);

  return (
    <div className="App">
      {results ? (
        <Results
          name={name}
          email={email}
          password={password1}
          setResults={setResults}
        />
      ) : (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password1={password1}
          setPassword1={setPassword1}
          password2={password2}
          setPassword2={setPassword2}
          results={results}
          setResults={setResults}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
