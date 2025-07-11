import { useState } from "react";

export default function UserInput({ label, type }) {
  const [userData, setUserData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    investmentDuration: 0
  });

  function handleChange(inputIdentifier, newValue) {
    setUserData(userData => ({
      ...userData, [inputIdentifier]: newValue
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            value={userData.initialInvestment}
            onChange={(event) => handleChange("initialInvestment", event.target.value)} />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={userData.annualInvestment}
            onChange={(event) => handleChange("annualInvestment", event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={userData.expectedReturn}
            onChange={(event) => handleChange("expectedReturn", event.target.value)} />
        </p>
        <p>
          <label>investment duration</label>
          <input
            type="number"
            required
            value={userData.investmentDuration}
            onChange={(event) => handleChange("investmentDuration", event.target.value)} />
        </p>
      </div>
    </section>
  );
}

