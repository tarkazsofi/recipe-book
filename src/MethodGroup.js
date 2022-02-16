const MethodGroup = ({ steps }) => (
  <ul>
    {steps.map((step, stepIndex) => (
      <li key={stepIndex}>{step}</li>
    ))}
  </ul>
);

export default MethodGroup;
