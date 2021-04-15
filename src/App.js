import { useEffect, useState } from "react";
import { TextField, IconButton, CircularProgress } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import CheckIcon from "@material-ui/icons/Check";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumberMap, setPhoneNumberMap] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);

  async function getData() {
    setLoading(true);
    const res = await fetch("./denmark-small.json");
    const jsonRes = await res.json();

    setPhoneNumberMap(jsonRes);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setName(phoneNumberMap[inputValue]);
    setIsSubmitted(true);
  }

  function handleInputChange(e) {
    setIsSubmitted(false);
    setInputValue(e.target.value);
  }

  function renderResult() {
    if (!isSubmitted || !inputValue) {
      return null;
    }

    if (name) {
      return (
        <p>
          <ErrorIcon color="error" />
          Telefonnummeret <strong>{inputValue}</strong> tilhører{" "}
          <strong>{name}</strong> og er en del af Facebook lækket
        </p>
      );
    }

    return (
      <p>
        <CheckIcon style={{ color: "green" }} /> Telefonnummeret{" "}
        <strong>{inputValue}</strong> er ikke en del af Facebook lækket
      </p>
    );
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          type="number"
          id="standard-basic"
          label="Telefonnummer"
          onChange={handleInputChange}
          value={inputValue}
        />
        <IconButton type="submit" color="primary" aria-label="Søg">
          <SearchIcon />
        </IconButton>

        {renderResult()}
      </form>
    </div>
  );
}

export default App;
