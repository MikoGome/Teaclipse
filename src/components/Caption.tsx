type CaptionProps = {
  value: string;
  className?: string;
}

export const Caption = (props: CaptionProps) => (
  <span className={`font-extrabold text-6xl whitespace-nowrap relative top-10 font-motor ${props.className ?? ''}`}>{props.value}</span>
)