type TitleProps = {
  value: string;
  className?: string;
};

export const Title = (props: TitleProps) => (
  <h1
    className={`text-peach font-bold font-motor text-3xl sm:text-4xl md:text-5xl my-6 ${props.className ?? ""}`}
  >
    {props.value}
  </h1>
);
