import Card from "./Card";

export default function CardContainer() {
  return (
    <aside className="relative w-full h-60 bg-clr-primary-700">
      <figure className="absolute w-full right-0 top-8">
        <img
          className="w-[min(76%,25rem)]"
          src="images/bg-card-back.png"
          alt=""
        />
        <figcaption></figcaption>
      </figure>
      <figure className="absolute w-full z-10 left-4 top-[7.8125rem]">
        <img
          className="w-[min(76%,25rem)]"
          src="images/bg-card-front.png"
          alt=""
        />
        <figcaption></figcaption>
      </figure>
    </aside>
  );
}
