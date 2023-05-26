/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    ModalBody,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from "reactstrap";
import { firestore } from "firebasek/firebase";
import _ from "lodash";

function Projects() {
    const [number, setNumber] = useState(6);
    const [datas, setDatas] = useState([]);
    const [data, setData] = useState([]);
    const [isLargeScreen, setIsLargeScreen] = useState(true);
    const [screenSize, setScreenSize] = useState({ width: 1080, height: 1920 });
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProjectId, setSelectedProjectId] = useState(-1);

    const projectCollection = collection(firestore, "Projects");

    const getDatas = async () => {
        const tempDatas = await getDocs(projectCollection);
        const docs = [];

        tempDatas.forEach((data1) => {
            const lelData = data1.data();
            docs.push({
                image: lelData.coverURL,
                name: lelData.name,
                id: data1.id,
                route: "/",
                images: lelData.images,
            });
        });
        setData(docs);
        setDatas(_.chunk(docs.slice(0, number), 3));
    };

    useEffect(() => {
        const start = async () => {
            await getDatas();
        };
        start();
    }, []);

    useEffect(() => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        setNumber(isLargeScreen ? 6 : 3);
    }, []);

    useEffect(() => {
        setDatas(
            isLargeScreen
                ? _.chunk(data.slice(0, number), 3)
                : data.slice(0, number)
        );
    }, [number, data]);

    useEffect(() => {
        setIsLargeScreen(window.innerWidth > 1);
    }, [window.innerWidth]);

    const renderProject = (index, name, url) => (
        <Button
            xs={12}
            md={4}
            sx={{ mb: { xs: 3, lg: 0 } }}
            onClick={() => {
                setSelectedProjectId(index);
            }}
            style={{
                width: "100%",
                margin: 0,
                aspectRatio: "16/10",
                padding: 0,
                borderRadius: "20px",
            }}
        >
            <img
                alt={name}
                src={url}
                name={name}
                style={{
                    width: "100",
                    aspectRatio: "16/10",
                    borderRadius: "20px",
                }}
            />
        </Button>
    );

    const renderProjects = datas.map((chunk, index1) => {
        return (
            <Row>
                {chunk && chunk.length > 0 ? (
                    chunk.map(({ name, image }, index2) => {
                        return (
                            <Col
                                sx={12}
                                md={12 / chunk.length}
                                style={{ marginBottom: "10px" }}
                            >
                                {renderProject(
                                    index1 * (isLargeScreen ? 3 : 1) + index2,
                                    name,
                                    image
                                )}
                            </Col>
                        );
                    })
                ) : (
                    <></>
                )}
            </Row>
        );
    });

    return (
        <div>
            <Container>
                <Modal
                    isOpen={selectedProjectId !== -1}
                    toggle={() => {
                        setSelectedProjectId(-1);
                        setActiveIndex(0);
                    }}
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <ModalBody
                        style={{
                            padding: 0,
                            margin: 0,

                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            aspectRatio: "16/9",
                        }}
                    >
                        <Carousel activeIndex={activeIndex} slide={false}>
                            <CarouselIndicators
                                activeIndex={activeIndex}
                                items={
                                    selectedProjectId !== -1
                                        ? data[selectedProjectId].images.map(
                                              (image, i) => ({
                                                  src: image,
                                                  key: i + 1,
                                                  // caption: i + 1,
                                                  altText: `Slide ${i + 1}`,
                                              })
                                          )
                                        : []
                                }
                                onClickHandler={(index) => {
                                    setActiveIndex(index);
                                }}
                            />
                            {(selectedProjectId !== -1
                                ? data[selectedProjectId].images.map(
                                      (image, i) => ({
                                          src: image,
                                          key: i + 1,
                                          // caption: i + 1,
                                          altText: `Slide ${i + 1}`,
                                      })
                                  )
                                : []
                            ).map((image) => (
                                <CarouselItem>
                                    <img
                                        style={{
                                            width: "100%",
                                            aspectRatio: "16/9",
                                            borderRadius: "10px",
                                        }}
                                        alt={image.altText}
                                        src={image.src}
                                        key={image.key}
                                    />
                                </CarouselItem>
                            ))}
                            <CarouselControl
                                direction="prev"
                                directionText="Previous"
                                onClickHandler={() => {
                                    if (activeIndex > 0)
                                        setActiveIndex(activeIndex - 1);
                                }}
                            />
                            <CarouselControl
                                direction="next"
                                directionText="Next"
                                onClickHandler={() => {
                                    if (
                                        activeIndex + 1 <
                                        data[selectedProjectId].images.length
                                    )
                                        setActiveIndex(activeIndex + 1);
                                }}
                            />
                        </Carousel>
                    </ModalBody>
                </Modal>
                <Col>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title" id="projects-section">
                                Projects
                            </h2>
                        </Col>
                    </Row>
                    {datas ? renderProjects : <></>}
                </Col>
            </Container>
        </div>
    );
}
export default Projects;
