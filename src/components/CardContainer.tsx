import Card from "./Card";

export default function CardContainer() {
  return (
    <aside className="flex justify-center h-[min(64vw,20rem)] bg-clr-primary-700">
      <div className="relative w-[min(100%,45rem)]">
        <figure className="w-[min(76%,25rem)] absolute right-4 top-8">
          <Card side="back" />
          <figcaption></figcaption>
        </figure>
        <figure className="w-[min(76%,25rem)] absolute z-10 left-4 top-[min(2rem+23.5vw,9.77rem)]">
          <Card side="front" />
          <figcaption></figcaption>
        </figure>
      </div>
    </aside>
  );
}
