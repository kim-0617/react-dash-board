interface IIconButton {
  icon: React.ReactNode;
  color: string;
  bgHoverColor: string;
  size: string;
  borderRadius: string;
}

const IconButton = ({
  icon,
  color,
  bgHoverColor,
  size,
  borderRadius,
}: IIconButton) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgHoverColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
