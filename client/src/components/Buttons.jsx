const Button = ({ label, fn }) => {
  return <button onClick={fn}>{label}</button>;
};

export default Button;
