import Card from "./Card";

export default function CardContainer() {
  return (
    <aside
      className="flex justify-center h-60 bg-clr-primary-700 bg-mobile bg-no-repeat bg-center bg-cover"
      aria-hidden="true">
      <div className="relative w-[min(100%,32rem)] text-clr-bg-main">
        <Card side="back" />
        <Card side="front" />
      </div>
    </aside>
  );
}
