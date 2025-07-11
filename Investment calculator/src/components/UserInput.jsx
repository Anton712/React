export default function UserInput({ onChange, userData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            value={userData.initialInvestment}
            onChange={(event) => onChange("initialInvestment", event.target.value)} />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={userData.annualInvestment}
            onChange={(event) => onChange("annualInvestment", event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={userData.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)} />
        </p>
        <p>
          <label>investment duration</label>
          <input
            type="number"
            required
            value={userData.duration}
            onChange={(event) => onChange("duration", event.target.value)} />
        </p>
      </div>
    </section>
  );
}

