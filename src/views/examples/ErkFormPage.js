import React from "react";

// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";
import ProjectSection from "components/ErkForm/Projects";
import Partners from "components/ErkForm/Partners";
import WhatWeDo from "components/ErkForm/Whatwedo";

function ErkFormPage() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <div className="wrapper">
                <div
                    className="section section-about-us"
                    // data-background-color="black"
                    id="about-section"
                    // style={{ background: "#333333" }}
                >
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">Who we are?</h2>
                                <h5 className="description">
                                    Erk Form is a team of professionals who have
                                    been performing fast, efficient, and
                                    high-quality metal work for major projects
                                    such as roads, bridges, tunnels, railways,
                                    and residential projects since 2020. We will
                                    carry out any project according to your
                                    wishes in a professional manner, quickly and
                                    safely.
                                </h5>
                            </Col>
                        </Row>
                        <div className="separator separator-primary"></div>
                        <WhatWeDo />
                        <ProjectSection />
                        <Partners />
                        {/* <div className="section-story-overview">
                            <Row>
                                <Col md="6">
                                    <div
                                        className="image-container image-left"
                                        style={{
                                            backgroundImage:
                                                "url(" +
                                                require("assets/img/picture3.jpg") +
                                                ")",
                                        }}
                                    >
                                        <p className="blockquote blockquote-info">
                                            "Over the span of the satellite
                                            record, Arctic sea ice has been
                                            declining significantly, while sea
                                            ice in the Antarctichas increased
                                            very slightly" <br></br>
                                            <br></br>
                                            <small>-NOAA</small>
                                        </p>
                                    </div>
                                    <div
                                        className="image-container"
                                        style={{
                                            backgroundImage:
                                                "url(" +
                                                require("assets/img/picture2.jpg") +
                                                ")",
                                        }}
                                    ></div>
                                </Col>
                                <Col md="5">
                                    <div
                                        className="image-container image-right"
                                        style={{
                                            backgroundImage:
                                                "url(" +
                                                require("assets/img/picture1.jpg") +
                                                ")",
                                        }}
                                    ></div>
                                    <h3>
                                        So what does the new record for the
                                        lowest level of winter ice actually mean
                                    </h3>
                                    <p>
                                        The Arctic Ocean freezes every winter
                                        and much of the sea-ice then thaws every
                                        summer, and that process will continue
                                        whatever happens with climate change.
                                        Even if the Arctic continues to be one
                                        of the fastest-warming regions of the
                                        world, it will always be plunged into
                                        bitterly cold polar dark every winter.
                                        And year-by-year, for all kinds of
                                        natural reasons, there’s huge variety of
                                        the state of the ice.
                                    </p>
                                    <p>
                                        For a start, it does not automatically
                                        follow that a record amount of ice will
                                        melt this summer. More important for
                                        determining the size of the annual thaw
                                        is the state of the weather as the
                                        midnight sun approaches and temperatures
                                        rise. But over the more than 30 years of
                                        satellite records, scientists have
                                        observed a clear pattern of decline,
                                        decade-by-decade.
                                    </p>
                                    <p>
                                        The Arctic Ocean freezes every winter
                                        and much of the sea-ice then thaws every
                                        summer, and that process will continue
                                        whatever happens with climate change.
                                        Even if the Arctic continues to be one
                                        of the fastest-warming regions of the
                                        world, it will always be plunged into
                                        bitterly cold polar dark every winter.
                                        And year-by-year, for all kinds of
                                        natural reasons, there’s huge variety of
                                        the state of the ice.
                                    </p>
                                </Col>
                            </Row>
                        </div> */}
                    </Container>
                </div>
                {/* <div
                    className="section section-team text-center"
                    // data-background-color="black"
                    id="team-section"
                >
                    <Container>
                        <h2 className="title">Here is our team</h2>
                        <div className="team">
                            <Row>
                                <Col md="4">
                                    <div className="team-player">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-fluid img-raised"
                                            src={require("assets/img/avatar.jpg")}
                                        ></img>
                                        <h4 className="title">Romina Hadid</h4>
                                        <p className="category text-primary">
                                            Model
                                        </p>
                                        <p className="description">
                                            You can write here details about one
                                            of your team members. You can give
                                            more details about what they do.
                                            Feel free to add some{" "}
                                            <a
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                links
                                            </a>{" "}
                                            for people to be able to follow them
                                            outside the site.
                                        </p>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </Button>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </Button>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-facebook-square"></i>
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="team-player">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-fluid img-raised"
                                            src={require("assets/img/ryan.jpg")}
                                        ></img>
                                        <h4 className="title">Ryan Tompson</h4>
                                        <p className="category text-primary">
                                            Designer
                                        </p>
                                        <p className="description">
                                            You can write here details about one
                                            of your team members. You can give
                                            more details about what they do.
                                            Feel free to add some{" "}
                                            <a
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                links
                                            </a>{" "}
                                            for people to be able to follow them
                                            outside the site.
                                        </p>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </Button>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-linkedin"></i>
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="team-player">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-fluid img-raised"
                                            src={require("assets/img/eva.jpg")}
                                        ></img>
                                        <h4 className="title">Eva Jenner</h4>
                                        <p className="category text-primary">
                                            Fashion
                                        </p>
                                        <p className="description">
                                            You can write here details about one
                                            of your team members. You can give
                                            more details about what they do.
                                            Feel free to add some{" "}
                                            <a
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                links
                                            </a>{" "}
                                            for people to be able to follow them
                                            outside the site.
                                        </p>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-google-plus"></i>
                                        </Button>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-youtube"></i>
                                        </Button>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div> */}
                {/* <ContactUs /> */}
                <div
                    className="section section-contact-us text-center"
                    // data-background-color="black"
                    id="contact-section"
                >
                    <Container>
                        <h2 className="title">Want to work with us?</h2>
                        <p className="description">
                            Your project is very important to us.
                        </p>
                        <Row>
                            <Col lg="6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3940872254198!2d151.13767647552214!3d-33.930990873202866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba757d4445b1%3A0x9c664cbcc24f8dd7!2s29%20Cook%20St%2C%20Turrella%20NSW%202205!5e0!3m2!1sen!2sau!4v1683331325269!5m2!1sen!2sau"
                                    height="480px"
                                    width={
                                        window.innerWidth < 600
                                            ? "100%"
                                            : "600px"
                                    }
                                    style={{
                                        border: 0,
                                        borderRadius: "5%",
                                        filter: "invert(90%)",
                                    }}
                                    allowFullScreen="true"
                                    loading="lazy"
                                    title="Mondaa Steel Fixing"
                                    referrerpolicy="no-referrer-when-downgrade"
                                />
                            </Col>
                            <Col lg="6">
                                <Col className="text-center ml-auto mr-auto">
                                    <InputGroup
                                        className={
                                            "input-lg" +
                                            (firstFocus
                                                ? " input-group-focus"
                                                : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="First Name..."
                                            type="text"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "input-lg" +
                                            (lastFocus
                                                ? " input-group-focus"
                                                : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons ui-1_email-85"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email..."
                                            type="text"
                                            onFocus={() => setLastFocus(true)}
                                            onBlur={() => setLastFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                    <div className="textarea-container">
                                        <Input
                                            cols="80"
                                            name="name"
                                            placeholder="Type a message..."
                                            rows="4"
                                            type="textarea"
                                        ></Input>
                                    </div>
                                    <div className="send-button">
                                        <Button
                                            block
                                            className="btn-round"
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="lg"
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default ErkFormPage;
