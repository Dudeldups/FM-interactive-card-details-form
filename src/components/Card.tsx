type CardProps = {
  side: string;
};

export default function Card({ side }: CardProps) {
  type ClassName = {
    container: string;
    img: string;
  };

  let className: ClassName = {
    container: `absolute text-[0.5625rem] tracking-[0.08rem]`,
    img: "w-[17.8125rem] h-[9.763rem] xl:w-[37.9375rem] xl:h-[15.3125rem]",
  };

  switch (side) {
    case "back":
      className.container += ` right-[min(-2.6rem+15.5vw,1rem)] top-8`;
      break;

    case "front":
      className.container += ` left-[min(-2.6rem+15.5vw,1rem)] top-[7.52rem]`;
      break;
  }

  return (
    <div className={className.container}>
      <img
        className={className.img}
        src={`images/bg-card-${side}.png`}
        alt=""
      />
      {side === "back" ? (
        <p className="absolute right-[2.31rem] top-[4.4rem]">000</p>
      ) : (
        <div className="absolute inset-0 pl-[1.2rem] pr-[1.3rem] py-[1.1rem]">
          <img
            className="w-[3.375rem] h-[1.875rem]"
            src="images/card-logo.svg"
            alt=""
          />
          <p className="mt-[2.3rem] text-[1.125rem] tracking-[0.1375rem] xl:text-[1.75rem] xl:tracking-[0.21388rem]">
            0000 0000 0000 0000
          </p>
          <div className="flex justify-between mt-[1.06rem]">
            <p className="uppercase">Jane Appleseed</p>
            <p>00/00</p>
          </div>
        </div>
      )}
    </div>
  );
}
