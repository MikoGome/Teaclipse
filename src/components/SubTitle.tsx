type SubTitleProps = {
  value: string;
  className?: string;
}

export const SubTitle = (props: SubTitleProps) => (
  <h1 className={`text-brown font-motor text-2xl sm:text-3xl md:text-4xl my-6 ${props.className ?? '' }`}>{props.value}</h1>
)
