import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userData }) {

  let resultsData = calculateInvestmentResults(userData);
  const initialInvestment = userData.initialInvestment;
  // const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  let resultsElement = resultsData.map((yearData) => {
    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

    return <tr key={yearData.year}>
      <td>{yearData.year}</td>
      <td>{formatter.format(yearData.valueEndOfYear)}</td>
      <td>{formatter.format(yearData.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsElement}
      </tbody>
    </table>
  );
}