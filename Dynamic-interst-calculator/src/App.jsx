import { Header } from "./components/Header";
import { UserInput } from "./components/UserInput";
import { useState } from "react";
import { Results } from "./components/Results";

function App() {
  useState();
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isValidDuration = userInput.duration >=1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header  />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {isValidDuration ? <Results input = {userInput}/> : <p className="center">Please enter valid duration!!!</p>}
    </>
  );
}

export default App;
