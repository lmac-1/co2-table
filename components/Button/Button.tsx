// interface ButtonBaseProps {
//   className?: string;
// }

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;
//& ButtonBaseProps;

export const Button = ({ onClick, ...props }: Props) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full text-4xl"
    >
      START
    </button>
  );
};
