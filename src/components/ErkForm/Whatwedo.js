import { Container, Row, Col } from "reactstrap";

import bridge from "assets/img/whatwedo/bridge.svg";
import building from "assets/img/whatwedo/building.svg";
import road from "assets/img/whatwedo/road.svg";
import train from "assets/img/whatwedo/train.svg";
import tunnel from "assets/img/whatwedo/tunnel.svg";
import windmill from "assets/img/whatwedo/windmill.svg";
import { useEffect, useState } from "react";

function WhatWeDo() {
    const [screenSize, setScreenSize] = useState({ width: 1080, height: 1920 });

    useEffect(() => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    return (
        <div
            className="section section-about-us"
            // data-background-color="black"
            id="about-section"
            // style={{ background: "#333333" }}
        >
            <Container
                style={{
                    background: "orange",
                    paddingBottom: "30px",
                    borderRadius: "25px",
                }}
            >
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">What we do</h2>
                        <Row>
                            <Col>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col md="4">
                                        <img src={bridge} alt="Bridge" />
                                    </Col>
                                    <Col md="8">
                                        <h3>Bridge</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col md="4">
                                        <img src={building} alt="Building" />
                                    </Col>
                                    <Col style={{ justifyItems: "center" }}>
                                        <h3>Building</h3>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col md="4">
                                        <img src={road} alt="Road" />
                                    </Col>
                                    <Col>
                                        <h3>Road</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col md="4">
                                        <img src={train} alt="Train" />
                                    </Col>
                                    <Col>
                                        <h3>Train</h3>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col md="4">
                                        <img src={tunnel} alt="Tunnel" />
                                    </Col>
                                    <Col>
                                        <h3>Tunnel</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col md="4">
                                        <img src={windmill} alt="Windmill" />
                                    </Col>
                                    <Col>
                                        <h3>Windmill</h3>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default WhatWeDo;
