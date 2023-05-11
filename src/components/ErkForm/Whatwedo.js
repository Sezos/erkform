import { Container, Row, Col } from "reactstrap";

function WhatWeDo() {
    return (
        <div
            className="section section-about-us"
            // data-background-color="black"
            id="about-section"
            // style={{ background: "#333333" }}
        >
            <Container>
                <Col>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">What we do</h2>
                        </Col>
                    </Row>
                    <Row></Row>
                </Col>
            </Container>
        </div>
    );
}
export default WhatWeDo;
