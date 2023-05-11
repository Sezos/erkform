import React from "react";
// import { Link } from "react-router-dom";
import logo from "./../../assets/img/erkform_mini_logo.png";
// reactstrap components
import {
    // Button,
    Collapse,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-white");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-white");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar
                className={"fixed-top " + navbarColor}
                expand="lg"
                color="light"
            >
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            style={{ fontSize: "20px" }}
                            href="https://erkform.com.au"
                            target="_blank"
                            id="navbar-brand"
                            className="text-primary"
                        >
                            <img
                                src={logo}
                                style={{ width: "15%", paddingRight: "2%" }}
                                alt="erk-form"
                            />
                            ERK FORM
                        </NavbarBrand>
                        <UncontrolledTooltip target="#navbar-brand">
                            Erk Form PTY LTD
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle(
                                    "nav-open"
                                );
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            <NavItem>
                                <NavLink
                                    href="#pablo"
                                    style={{ color: "black" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById("about-section")
                                            .scrollIntoView();
                                    }}
                                >
                                    {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                                    <p>About us</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#pablo"
                                    style={{ color: "black" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById("project-section")
                                            .scrollIntoView();
                                    }}
                                >
                                    {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                                    <p>Projects</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#pablo"
                                    style={{ color: "black" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById("contact-section")
                                            .scrollIntoView();
                                    }}
                                >
                                    {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                                    <p>contact us</p>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    href="https://www.facebook.com/profile.php?id=100091212576406"
                                    target="_blank"
                                    id="facebook-tooltip"
                                >
                                    <i
                                        style={{ color: "black" }}
                                        className="fab fa-facebook-square"
                                    ></i>
                                    <p className="d-lg-none d-xl-none">
                                        Facebook
                                    </p>
                                </NavLink>
                                <UncontrolledTooltip target="#facebook-tooltip">
                                    Like us on Facebook
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.instagram.com/ERKFORM/?fbclid=IwAR0SFzcW12FP6BnZyYk72Syc7kOIYUDmdD0cDBxhZgvhFy5ePtIrAn24-WM"
                                    target="_blank"
                                    id="instagram-tooltip"
                                >
                                    <i
                                        style={{ color: "black" }}
                                        className="fab fa-instagram"
                                    ></i>
                                    <p className="d-lg-none d-xl-none">
                                        Instagram
                                    </p>
                                </NavLink>
                                <UncontrolledTooltip target="#instagram-tooltip">
                                    Follow us on Instagram
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="tel:+61451460616"
                                    target="_blank"
                                    id="twitter-tooltip"
                                >
                                    <i
                                        style={{ color: "black" }}
                                        className="fa fa-phone"
                                    ></i>
                                    <p className="d-lg-none d-xl-none">
                                        Call us!
                                    </p>
                                </NavLink>
                                <UncontrolledTooltip target="#twitter-tooltip">
                                    Call us!
                                </UncontrolledTooltip>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default IndexNavbar;
