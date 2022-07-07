const Results = ({ name, email, password, setResults }) => {
  return (
    <div className="infos">
      <h1>Results</h1>
      <div className="results">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button
        onClick={() => {
          setResults(false);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default Results;
