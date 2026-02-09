import backgroundCloud from "../assets/images/backgroundcloud.png";

type BackgroundCloudProps = {
  className?: string;
};

export const BackgroundCloud = (props: BackgroundCloudProps) => {
  
  return (
    <img
      src={backgroundCloud}
      className={`-z-20 absolute ${props.className ?? ""} animate-cloud-background`}
    />
  )
};
