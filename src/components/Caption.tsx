type CaptionProps = {
  value: string;
  className?: string;
}

export const Caption = (props: CaptionProps) => (
  <span className={`font-extrabold text-3xl sm:text-5xl md:text-6xl font-motor ${props.className ?? ''}`}>{props.value}</span>
)
