import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-2 mb-md-0">
            <span style={{ color: "#fff", fontWeight: 700 }}>Asad Sardar</span>
            <span style={{ marginLeft: "0.75rem" }}>
              © {new Date().getFullYear()}
            </span>
          </Col>
          <Col md={6} className="text-md-end">
            <a
              href="https://github.com/FireLighT1337"
              target="_blank"
              rel="noreferrer"
              className="me-3"
            >
              GitHub
            </a>
            <a href="mailto:asadsardar35@gmail.com">Email</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
