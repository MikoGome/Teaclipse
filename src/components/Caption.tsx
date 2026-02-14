type CaptionProps = {
  value: string;
  className?: string;
}

export const Caption = (props: CaptionProps) => (
  <span className={`font-bold text-3xl sm:text-5xl font-motor ${props.className ?? ''}`}>{props.value}</span>
)
