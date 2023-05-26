import { Container, Row, Col } from "reactstrap";

function WhoWeAre() {
    return (
        <div
            className="section section-about-us"
            // data-background-color="black"
            id="project-section"
            // style={{ background: "#333333" }}
        >
            <Container>
                <Col>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Who we are</h2>
                            <h5 className="h4">
                                Erkform has been a steel reinforcing company
                                based in Sydney since 2020. We offer reliable
                                steel fixing services for major civil,
                                commercial, and residential projects. All of our
                                steel fixers have received the highest level of
                                safety-related training and are qualified for
                                all tasks relating to concrete reinforcing. We
                                will carry out any project according to your
                                wishes in a professional manner, quickly, and
                                safely.
                            </h5>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}
export default WhoWeAre;
