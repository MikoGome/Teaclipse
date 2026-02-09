import type { ReactNode } from "react";

type PaddingWrapperProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export const Section = (props: PaddingWrapperProps) => (
  <section
    className={`relative min-h-svh px-[max(0px,15%)] text-white flex flex-col justify-center ${props.className ?? ''}`}
    id={props.id}
  >
    {props.children}
  </section>
);
