type TitleProps = {
  value: string;
}

export const Title = (props: TitleProps) => (
  <h1 className="text-peach font-bold font-motor text-5xl my-6">{props.value}</h1>
)