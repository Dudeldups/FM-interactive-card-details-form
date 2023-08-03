import Input from "./Input";

type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({ handleSubmit, handleChange }: FormProps) {
  return (
    <div className="grid place-content-center mt-16 px-3 xs:px-6 py-6 text-xs text-clr-primary-700 uppercase tracking-[0.125rem]">
      <form
        className="grid max-w-[23.8125rem]"
        autoComplete="off"
        action="/"
        method="GET"
        onSubmit={handleSubmit}>
        <label htmlFor="name">Cardholder name</label>
        <Input
          id="name"
          placeholder="e.g. Jane Appleseed"
          handleChange={handleChange}
        />

        <label htmlFor="cardNum">Card number</label>
        <Input
          id="cardNum"
          placeholder="e.g. 1234 5678 9123 0000"
          handleChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <fieldset className="">
            <legend className="" aria-hidden="true">
              Exp. date (MM/YY)
            </legend>

            <div className="grid grid-cols-2 gap-2 sm:gap-[0.62rem]">
              <label className="sr-only" htmlFor="expiration-m">
                Expiration month, two digits
              </label>
              <Input
                id="expiration-m"
                placeholder="MM"
                handleChange={handleChange}
              />

              <label className="sr-only" htmlFor="expiration-y">
                Expiration year, two digits
              </label>
              <Input
                id="expiration-y"
                placeholder="YY"
                handleChange={handleChange}
              />
            </div>
          </fieldset>

          <div>
            <label htmlFor="cvc">CVC</label>
            <Input
              id="cvc"
              placeholder="e.g. 123"
              handleChange={handleChange}
            />
          </div>
        </div>
        <button
          className="mt-4 p-3 rounded-lg bg-clr-primary-700 text-white text-lg"
          type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}
