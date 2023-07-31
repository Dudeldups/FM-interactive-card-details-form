type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({ handleSubmit, handleChange }: FormProps) {
  return (
    <div className="grid place-content-center mt-[5.7rem] px-3 xs:px-6 text-clr-primary-700 uppercase">
      <form className="grid bg-blue-100" action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Cardholder name</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="cardNum">Card number</label>
        <input type="text" id="cardNum" onChange={handleChange} />

        <label htmlFor="expiration-m">
          <span aria-hidden="true">Exp. date (MM/YY)</span>
          <span className="sr-only">Expiration month, two digits</span>
        </label>

        <label className="sr-only" htmlFor="expiration-y">
          Expiration year, two digits
        </label>

        <div className="grid grid-cols-[1fr_1fr_2fr] gap-3">
          <input type="text" id="expiration-m" onChange={handleChange} />
          <input type="text" id="expiration-y" onChange={handleChange} />
          <input type="text" id="cvc" onChange={handleChange} />
        </div>

        <label htmlFor="cvc">CVC</label>

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
