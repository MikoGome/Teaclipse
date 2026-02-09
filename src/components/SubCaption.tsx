type SubCaptionProps = {
  value: string;
  className?: string;
}

export const SubCaption = (props: SubCaptionProps) => (
  <h2 className={`text-2xl font-bold ${props.className ?? ''}`}>{props.value}</h2>
)