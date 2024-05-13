import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="bg-slate-900 text-white text-base text-center">
      Copyright &#169; URLShortner 2024 | sumit kumar
    </div>
  );
};

export default Footer;
