import { FC, useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  el?: string;
}

export const Portal: FC<PortalProps> = ({ children, el = "div" }) => {
  const [element] = useState(() => document.createElement(el));
  useEffect(() => {
    document.getElementById("root").firstChild.appendChild(element);
    return () => {
      document.getElementById("root").firstChild.removeChild(element);
    };
  }, []);
  return ReactDOM.createPortal(children, element);
};
