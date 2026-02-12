import { useEffect } from "react";
import { Title } from "../components/Title";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Title value="Page Not Found... Redirecting"/>
    </span>
  )
}
