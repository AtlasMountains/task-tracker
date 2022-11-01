const Button = ({ text, color, onClick }) => {
  return (
    <button className={`${color} text-white p-3 rounded-md`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
