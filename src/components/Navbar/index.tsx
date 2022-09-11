import {Container, FlexContainer, NavWrapper} from "./styles";
import BrandImage from "../BrandImage";

import "./styles.css";

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
                                    <a href={navEl.url}>
                                        {navEl.name}
                                    </a>
                                </li>
                            return <li key={index}>
                                <a href={navEl.url}>
                                    {navEl.name}
                                </a>
                            </li>
                        })}
                    </ul>
                </nav>
            </FlexContainer>
        </Container>
    </NavWrapper>;
};


export default Navbar;