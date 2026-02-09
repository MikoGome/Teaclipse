import foregroundCloud from "../assets/images/foregroundcloud.svg";

type ForgroundCloudProps = {
  className?: string;
};

export const ForegroundCloud = (props: ForgroundCloudProps) => {
  return (
    <img
      src={foregroundCloud}
      className={`absolute animate-cloud ${props.className ?? ""}`}
    />
  );
};
