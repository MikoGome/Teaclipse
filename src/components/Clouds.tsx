import foregroundCloud from "../assets/images/foregroundcloud.svg";
import backgroundCloud from "../assets/images/backgroundcloud.png";

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


type BackgroundCloudProps = {
  className?: string;
};

export const BackgroundCloud = (props: BackgroundCloudProps) => {
  
  return (
    <img
      src={backgroundCloud}
      className={`-z-20 absolute ${props.className ?? ''} animate-cloud-background`}
    />
  )
};