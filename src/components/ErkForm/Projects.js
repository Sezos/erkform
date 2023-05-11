import { Container, Row, Col } from "reactstrap";

function Projects() {
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
                            <h2 className="title">Projects</h2>
                        </Col>
                    </Row>
                    <Row></Row>
                </Col>
            </Container>
        </div>
    );
}
export default Projects;
