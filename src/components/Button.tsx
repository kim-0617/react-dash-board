interface IButton {
  color: string;
  bgColor: string;
  text: string;
  borderRadius: string;
  size: string;
  width?: string;
}

const Button = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
  width,
}: IButton) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl ${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
