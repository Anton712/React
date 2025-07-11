import { useState } from "react";
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  function handleChange(inputIdentifier, newValue) {
    setUserData(userData => ({
      ...userData, [inputIdentifier]: +newValue
    }));
  }

  return (
    <>
      <UserInput
        onChange={handleChange}
        userData={userData} />
      <Results
        userData={userData} />
    </>
  )
}

export default App
