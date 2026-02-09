import foregroundCloud from "../assets/images/foregroundcloud.svg";

type ForgroundCloudProps = {
  className?: string;
};

export const ForegroundCloud = (props: ForgroundCloudProps) => {
  return (
    <img
      src={foregroundCloud}
      className={`hidden lg:block absolute animate-cloud ${props.className ?? ""}`}
    />
  );
};
