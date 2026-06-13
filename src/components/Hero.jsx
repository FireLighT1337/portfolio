import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={7} className="order-md-4 order-2">
            <h1 className="hero-name">
              Hi, ich bin <span>Asad</span>
            </h1>
            <p className="hero-subtitle">
              Ein junior Webentwickler, der im Rahmen der Ausbildung zum
              Fachinformatiker für Anwendungsentwicklung seine Leidenschaft für
              die Webentwicklung entdeckt hat. Ich hatte schon vor der
              Ausbildung ein generelles Interesse an Webentwicklung, allerdings
              wurde mir nach dem Web-Dev Modul innerhalb meiner Ausbildung sehr
              schnell klar, dass ich in diesem Bereich später einmal arbeiten
              möchte. Ich werde zum 06.07.2026 meine Ausbildung abschließen und
              freue mich schon darauf, das Gelernte in einem professionellen
              Umfeld anwenden zu können.
            </p>
            <div className="d-flex gap-3 flex-wrap mt-4">
              <a href="#projects" className="btn-primary-custom">
                Meine Projekte
              </a>
              <a href="#contact" className="btn-outline-custom">
                Kontaktiere mich
              </a>
            </div>
          </Col>

          {/* Avatar */}
          <Col md={5} className="order-md-2 order-1 text-center">
            <div className="avatar-ring">
              <img
                src="/20240623_193116.jpg"
                alt="Photo of Asad Sardar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
