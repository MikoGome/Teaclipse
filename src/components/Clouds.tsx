import foregroundCloud from "../assets/images/foregroundcloud.svg";
import backgroundCloud from "../assets/images/backgroundcloud.png";

type ForgroundCloudProps = {
  className?: string;
  delay?: number;
};

export const ForegroundCloud = (props: ForgroundCloudProps) => {
  const delay = props.delay ?? Math.random() * 8;
  return (
    <img
      src={foregroundCloud}
      className={`hidden lg:block absolute animate-cloud -z-10 ${props.className ?? ""}`}
      style={{ animationDelay: `-${delay}s` }}
    />
  );
};


type BackgroundCloudProps = {
  className?: string;
  delay?: number;
};

export const BackgroundCloud = (props: BackgroundCloudProps) => {
  const delay = props.delay ?? Math.random() * 16;
  
  return (
    <img
      src={backgroundCloud}
      className={`-z-20 absolute ${props.className ?? ''} animate-cloud-background`}
      style={{ animationDelay: `-${delay}s` }}
    />
  )
};