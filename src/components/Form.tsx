type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({ handleSubmit, handleChange }: FormProps) {
  return (
    <div className="grid place-content-center mt-[5.7rem] px-3 xs:px-6 text-xs text-clr-primary-700 uppercase tracking-[0.125rem]">
      <form
        className="grid max-w-md bg-blue-100"
        autoComplete="off"
        action="/"
        method="GET"
        onSubmit={handleSubmit}>
        <fieldset className="grid">
          <label htmlFor="name">Cardholder name</label>
          <input type="text" id="name" onChange={handleChange} />
        </fieldset>

        <fieldset className="grid">
          <label htmlFor="cardNum">Card number</label>
          <input type="text" id="cardNum" onChange={handleChange} />
        </fieldset>

        <div className="grid grid-cols-2 gap-3">
          <fieldset className="">
            <legend className="" aria-hidden="true">
              Exp. date (MM/YY)
            </legend>

            <div className="grid grid-cols-2 gap-3">
              <label className="sr-only" htmlFor="expiration-m">
                Expiration month, two digits
              </label>
              <input type="text" id="expiration-m" onChange={handleChange} />

              <label className="sr-only" htmlFor="expiration-y">
                Expiration year, two digits
              </label>
              <input type="text" id="expiration-y" onChange={handleChange} />
            </div>
          </fieldset>

          <fieldset className="grid">
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" onChange={handleChange} />
          </fieldset>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
