import { Container, Row, Col } from "react-bootstrap";

// ── Replace these with your actual projects ──
const projects = [
  {
    image: "/Screenshot 2026-02-11 121231.png",
    position: "center",
    title: "B.E.R.N.D. Chatbot Frontend",
    description:
      "Ein Frontend für einen Chatbot, der mit einem RAG-Backend verbunden ist. Nutzer können Fragen stellen und erhalten Antworten basierend auf den Daten, die das Backend bereitstellt.",
    tech: ["React", "JavaScript", "CSS", "Azure"],
    github: "https://github.com/FireLighT1337/abschlussprojekt",
  },
  {
    image: "/Screenshot 2026-02-11 133903.png",
    position: "top",
    title: "RfQ Scanner Frontend",
    description:
      "Innerhalb eines internen Projektes hatte ich die Aufgabe, ein bestehendes Frontend für mobile Geräte zu optimieren. Allerings kann ich natürlich hier leider nicht viel dazu zeigen.",
    tech: ["Vite", "TypeScript", "CSS", "Azure"],
    github: "",
  },
  {
    image: "/Screenshot 2026-06-13 190103.png",
    position: "center",
    title: "TinDog",
    description:
      "Eine kleine Witz-Webseite, die ich im Rahmen eines Udemy Kurses erstellt habe. Hierbei ging es hauptsächlich darum, Bootstrap zu vertiefen.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github:
      "https://github.com/FireLighT1337/web-dev-course/tree/main/11.3%20TinDog%20Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <Row className="mb-5">
          <Col>
            <p className="section-label">
              Ein paar Sachen an denen ich gearbeitet habe
            </p>
            <h2 className="section-title">Projekte</h2>
            <p className="section-desc">
              Eine kleine Auswahl an Projekten innerhalb meiner Ausbildung.
              Jedes Projekt hat mir etwas Neues beigebracht.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.title} md={6} lg={4}>
              <div className="project-card">
                {/* Project preview — replace with a real screenshot using <img> */}
                <div className="project-img">
                  <img
                    src={project.image}
                    alt="Project Name"
                    className="project-img"
                    style={{
                      objectFit: "cover",
                      objectPosition: project.position,
                    }}
                  />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div>
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
