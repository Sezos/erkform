/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
    return (
        <footer className="footer" data-background-color="white">
            <Container>
                {/* <nav>
                    <ul>
                        <li>
                            <a
                                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                                target="_blank"
                            >
                                Creative Tim
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                                target="_blank"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                                target="_blank"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav> */}
                <div className="copyright text-black" id="copyright">
                    © {new Date().getFullYear()}, Developed by{" "}
                    <a
                        href="https://www.instagram.com/badralzz"
                        target="_blank"
                        style={{ color: "black" }}
                    >
                        Badral
                    </a>
                    .
                </div>
            </Container>
        </footer>
    );
}

export default DarkFooter;
