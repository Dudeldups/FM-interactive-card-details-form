export default function Card({ side }: { side: string }) {
  return (
    <>
      {side === "back" && (
        <div className="absolute right-[min(-2.6rem+15.5vw,1rem)] top-8">
          <img
            className="w-[17.8125rem] h-[9.763rem]"
            src={`images/bg-card-${side}.png`}
            alt=""
          />
        </div>
      )}
      {side === "front" && (
        <div className="absolute left-[min(-2.6rem+15.5vw,1rem)] top-[7.52rem]">
          <img
            className="w-[17.8125rem] h-[9.763rem]"
            src={`images/bg-card-${side}.png`}
            alt=""
          />
        </div>
      )}
    </>
  );
}
