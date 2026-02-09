import { NAME } from "../utils/constants";

type BrandNameProps = {
  className?: string;
}

export const BrandName = (props: BrandNameProps) => (
  <h1 className={`text-black drop-shadow drop-shadow-lightorange text-6xl lg:text-8xl -rotate-6 font-petit ${props.className ?? ''}`}>
    {NAME.toLowerCase()}
  </h1>
);
