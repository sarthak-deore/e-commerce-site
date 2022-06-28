import "./button.styles.scss";

const BUUTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...ohterProps }) => {
  return (
    <button
      className={`button-container ${BUUTON_TYPE_CLASSES[buttonType]}`}
      {...ohterProps}
    >
      {children}
    </button>
  );
};

export default Button;
