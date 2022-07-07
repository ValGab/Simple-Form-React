import { useState } from "react";
import Results from "./Results";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [results, setResults] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword1Change = (event) => {
    const value = event.target.value;
    setPassword1(value);
  };

  const handlePassword2Change = (event) => {
    const value = event.target.value;
    setPassword2(value);
  };

  return (
    <div className="form">
      {results ? <h1>Results</h1> : <h1>Create account</h1>}

      {results ? (
        <Results
          name={name}
          email={email}
          password={password1}
          resultsState={results}
          setResults={setResults}
        />
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!password1 || !name || !email) {
              alert("Veuillez renseigner tous les champs");
            } else if (password1 !== password2) {
              alert("Vos mots de passe ne sont pas identiques");
            } else {
              setResults(true);
            }
          }}
        >
          <p>Name</p>
          <input
            type="text"
            placeholder="Jean Dupont"
            onChange={handleNameChange}
            value={name}
          />
          <p>Email</p>
          <input
            type="email"
            placeholder="jeandupont@lereacteur.io"
            onChange={handleEmailChange}
            value={email}
          />
          <p>Password</p>
          {password1 === password2 ? (
            <input
              type="password"
              onChange={handlePassword1Change}
              value={password1}
            />
          ) : (
            <input
              className="red"
              type="password"
              onChange={handlePassword1Change}
            />
          )}
          <p>Confirm your password</p>
          {password1 === password2 ? (
            <input
              type="password"
              onChange={handlePassword2Change}
              value={password2}
            />
          ) : (
            <input
              className="red"
              type="password"
              onChange={handlePassword2Change}
            />
          )}
          <input type="submit" value="Register" />
        </form>
      )}
    </div>
  );
};

export default Form;
