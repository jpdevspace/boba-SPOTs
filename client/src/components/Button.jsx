const Button = ({ label, isActive, ...props }) => {
  const classNames = `button ${isActive ? "button-active" : ""}`;

  return (
    <button data-testid="button" className={classNames} {...props}>
      {label ?? "Label"}
    </button>
  );
};

export default Button;
