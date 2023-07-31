type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({ handleSubmit, handleChange }: FormProps) {
  return (
    <div className="grid place-content-center mt-[5.7rem] px-3 xs:px-6 text-clr-primary-700 uppercase">
      <form
        className="grid bg-blue-100"
        autoComplete="off"
        action="/"
        method="GET"
        onSubmit={handleSubmit}>
        <label htmlFor="name">Cardholder name</label>
        <input type="text" id="name" onChange={handleChange} />

        <label htmlFor="cardNum">Card number</label>
        <input type="text" id="cardNum" onChange={handleChange} />

        <div className="grid grid-cols-2">
          <fieldset>
            <legend aria-hidden="true">Exp. date (MM/YY)</legend>

            <label className="sr-only" htmlFor="expiration-m">
              Expiration month, two digits
            </label>
            <input type="text" id="expiration-m" onChange={handleChange} />

            <label className="sr-only" htmlFor="expiration-y">
              Expiration year, two digits
            </label>
            <input type="text" id="expiration-y" onChange={handleChange} />
          </fieldset>

          <div>
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
