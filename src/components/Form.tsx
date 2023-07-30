type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({ handleSubmit, handleChange }: FormProps) {
  return (
    <div className="grid place-content-center mt-[5.7rem] text-clr-primary-700 uppercase bg-pink-200">
      <form
        className="grid max-w-[32rem] bg-blue-100"
        action="#"
        onSubmit={handleSubmit}>
        <label htmlFor="name">Cardholder name</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="cardNum">Card number</label>
        <input type="text" id="cardNum" onChange={handleChange} />
        <div className="flex gap-[0.7rem]">
          <div className="grid">
            <p aria-hidden="true" className="">
              Exp. date (MM/YY)
            </p>
            <div className="flex gap-[0.7rem]">
              <label className="sr-only" htmlFor="expiration-m">
                Expiration month, two digits
              </label>
              <input type="text" id="expiration-m" onChange={handleChange} />
              <label className="sr-only" htmlFor="expiration-y">
                Expiration year, two digits
              </label>
              <input type="text" id="expiration-y" onChange={handleChange} />
            </div>
          </div>
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
