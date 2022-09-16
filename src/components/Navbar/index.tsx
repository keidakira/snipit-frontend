import {Container, FlexContainer, NavWrapper} from "./styles";
import BrandImage from "../BrandImage";

import "./styles.css";
import {Link} from "react-router-dom";

interface NavProps {
    active: string
}

const Navbar = ({active}: NavProps) => {
    const navOptions = [
        {
            name: "Dashboard",
            activeName: "dashboard",
            url: "/dashboard"
        },
        {
            name: "Create Snippet",
            activeName: "create-snippet",
            url: "/create-snippet"
        },
        {
            name: "Logout",
            activeName: "logout",
            url: "/logout"
        }
    ];

    return <NavWrapper>
        <Container>
            <FlexContainer>
                <BrandImage/>
                <nav>
                    <ul>
                        {navOptions.map((navEl, index) => {
                            if (navEl.activeName === active)
                                return <li className={"active"} key={index}>
                                    <Link to={navEl.url}>
                                        {navEl.name}
                                    </Link>
                                </li>
                            return <li key={index}>
                                <Link to={navEl.url}>
                                    {navEl.name}
                                </Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </FlexContainer>
        </Container>
    </NavWrapper>;
};


export default Navbar;