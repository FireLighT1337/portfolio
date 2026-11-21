import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          <Col md={7} className="hero-content order-2 order-md-1">
            <h1 className="hero-name">
              Hi, ich bin <span>Asad</span>
            </h1>

            <div className="hero-subtitle">
              <p>
                Ein Junior-Webentwickler, der im Rahmen seiner Ausbildung zum
                Fachinformatiker für Anwendungsentwicklung seine Leidenschaft
                für die Webentwicklung entdeckt hat.
              </p>

              <p>
                Schon vor meiner Ausbildung hatte ich ein generelles Interesse
                an Webentwicklung. Nach dem Web-Development-Modul innerhalb
                meiner Ausbildung wurde mir jedoch schnell klar, dass ich später
                in diesem Bereich arbeiten möchte.
              </p>

              <p>
                Am 06.07.2026 habe ich meine Ausbildung erfolgreich
                abgeschlossen und freue mich darauf, mein Wissen in einem
                professionellen Umfeld einzusetzen und weiterzuentwickeln.
              </p>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary-custom">
                Meine Projekte
              </a>

              <a href="#contact" className="btn-outline-custom">
                Kontaktiere mich
              </a>
            </div>
          </Col>

          <Col md={5} className="hero-avatar order-1 order-md-2 text-center">
            <div className="avatar-ring">
              <img src="/20240623_193116.jpg" alt="Photo of Asad Sardar" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
