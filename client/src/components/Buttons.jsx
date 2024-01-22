const Button = ({ label, isActive, ...props }) => {
  const classNames = `button ${isActive ? "button-active" : ""}`;

  return (
    <button className={classNames} {...props}>
      {label}
    </button>
  );
};

export default Button;
