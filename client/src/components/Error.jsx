const Error = ({ message, closeError }) => {
  return (
    <div className="error">
      <h2>🔥🧋🔥 Something went wrong</h2>
      <p>{message}</p>
      <button onClick={closeError}>Got it!</button>
    </div>
  );
};

export default Error;
