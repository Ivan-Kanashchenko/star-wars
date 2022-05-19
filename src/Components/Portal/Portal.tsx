import * as React from "react";
import * as ReactDOM from "react-dom";

interface PortalProps {
  el?: string;
}

const Portal: React.FC<PortalProps> = ({ children, el = "div" }) => {
  const [element] = React.useState(() => document.createElement(el));
  React.useEffect(() => {
    document.getElementById("root").firstChild.appendChild(element);
    return () => {
      document.getElementById("root").firstChild.removeChild(element);
    };
  }, []);
  return ReactDOM.createPortal(children, element);
};

export default Portal;
