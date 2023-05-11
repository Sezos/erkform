/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div className="page-header clear-filter" filter-color="purple">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/background.jpg") + ")",
                    }}
                    ref={pageHeader}
                ></div>
                <Container>
                    <div
                        className="content-center brand "
                        style={{
                            background: "rgba(255, 255, 255, 0.7)",
                            borderRadius: "20px",
                            marginTop: "10%",
                        }}
                    >
                        <img
                            alt="..."
                            style={{
                                width: "auto",
                            }}
                            src={require("assets/img/erkform_logo_v2.png")}
                        ></img>
                        <h1
                            className="h1"
                            style={{
                                color: "black",
                                fontWeight: "bolder",
                                opacity: "2",
                                // position: "absolute",
                                // left: "22%",
                            }}
                        >
                            ERK FORM PTY LTD
                        </h1>
                    </div>
                    {/* <h6 className="category category-absolute">
                        Designed by{" "}
                        <a
                            href="http://invisionapp.com/?ref=creativetim"
                            target="_blank"
                        >
                            <img
                                alt="..."
                                className="invision-logo"
                                src={require("assets/img/invision-white-slim.png")}
                            ></img>
                        </a>
                        . Coded by{" "}
                        <a
                            href="https://www.creative-tim.com?ref=nukr-index-header"
                            target="_blank"
                        >
                            <img
                                alt="..."
                                className="creative-tim-logo"
                                src={require("assets/img/creative-tim-white-slim2.png")}
                            ></img>
                        </a>
                        .
                    </h6> */}
                </Container>
            </div>
        </>
    );
}

export default IndexHeader;
