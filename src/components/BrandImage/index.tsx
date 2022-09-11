import logo from "../../images/logo.png";

import "./styles.css";

const BrandImage = () => {
    return <div className={"brand-image-container"}>
        <img src={logo} alt={"SnipIt Logo"} width={48} className={"brand-image"} />
        <span className={"brand-name"}>SnipIt</span>
    </div>
};


export default BrandImage;