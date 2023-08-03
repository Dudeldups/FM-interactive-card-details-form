type InputProps = {
  id: string;
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ id, placeholder, handleChange }: InputProps) {
  let className = "mt-2 mb-6 px-4 py-2 text-lg rounded-lg border";

  if (id === "cvc") {
    className += " w-full";
  }

  return (
    <input
      key={id}
      className={className}
      type="text"
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
