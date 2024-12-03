import { Col, Row, Container } from "react-bootstrap";
import style from "./Header.module.css";
export function Header() {
  return (
    <div className={style.bgcolor_lightGrey}>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center pt-3">Il mio blog</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
