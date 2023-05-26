/* eslint-disable react-hooks/exhaustive-deps */
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "firebasek/firebase";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "assets/css/partners.css";

function Partners() {
    const [datas, setDatas] = useState([]);

    const getDatas = async () => {
        const listRef = ref(storage, "/PartnerLogos/");
        const res = await listAll(listRef);
        const sth = await Promise.all(
            res.items?.map(async (itemRef, i) => {
                const link = getDownloadURL(itemRef);
                return link;
            })
        );
        setDatas(sth);
    };

    useEffect(() => {
        const start = async () => {
            await getDatas();
        };
        start();
    }, []);

    return (
        <div id="partner-section">
            <Container>
                <Col>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Partners</h2>
                        </Col>
                    </Row>
                    <Row>
                        <div className="logos">
                            <div className2="logos-slide">
                                {datas?.map((url, index) => {
                                    return <img alt="logo" src={url} />;
                                })}
                            </div>
                        </div>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}
export default Partners;
