export default function Card({ side }: { side: string }) {
  return <img className="" src={`images/bg-card-${side}.png`} alt="" />;
}
