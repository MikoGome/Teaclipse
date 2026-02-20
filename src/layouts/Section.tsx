import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export const Section = (props: SectionProps) => (
  <section
    className={`relative min-h-svh p-6 md:p-12 px-6 md:px-[10%] lg:px-[15%] text-white flex flex-col justify-center ${props.className ?? ""}`}
    id={props.id}
  >
    {props.children}
  </section>
);
