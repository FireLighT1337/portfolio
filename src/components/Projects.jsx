import { Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    image: "/Screenshot 2026-09-04 114838.png",
    position: "center",
    title: "Steam Tracker",
    description:
      "Eine Full-Stack Webanwendung, mit der man seine Steam-Bibliothek durchsuchen, Achievements verfolgen und einen persönlichen Backlog verwalten kann. Das Backend kommuniziert mit der Steam-API, Login erfolgt direkt über den eigenen Steam-Account mithilfe von OpenID.",
    tech: [
      "Angular",
      "RxJS",
      "TypeScript",
      "Bootstrap",
      "CSS",
      "Express",
      "Axios",
      "JWT",
      "Vitest",
      "Playwright",
    ],
    github: "https://github.com/FireLighT1337/steam-tracker",
    live: "https://steam-tracker-three.vercel.app/dashboard",
    reference: "",
  },
  {
    image: "/Screenshot 2026-11-21 075832.png",
    position: "top",
    title: "F1 What-If",
    description:
      "Da ich privat die Formel 1 verfolge, habe ich mich dazu entschieden, meine Spring-Boot-Kenntnisse in einer Full-Stack F1 Anwendung zu vertiefen. Die Anwendung ermöglicht es, alle F1 Seasons von 1961 bis heute zu erkunden und alternative Meisterschaftsverläufe zu simulieren, indem man z.B. Fahrer oder Rennen ausschließt. Das Backend nutzt eine F1-Community-API, um historische Renndaten abzurufen, in einer MySQL-Datenbank zu speichern und für die Berechnungen und Auswertungen bereitzustellen.",
    tech: [
      "Angular",
      "RxJS",
      "NgRx",
      "TypeScript",
      "Tailwind",
      "Java",
      "Spring Boot",
      "OpenAPI/Springdoc",
      "Flyway",
      "MySQL",
      "Vitest",
      "Playwright",
      "JUnit",
    ],
    github: "https://github.com/FireLighT1337/f1-what-if",
    live: "https://f1-what-if.vercel.app/",
    reference: "",
  },
  {
    image: "/Screenshot 2026-02-11 121231.png",
    position: "top",
    title: "B.E.R.N.D. Chatbot",
    description:
      "Ursprünglich mein IHK-Abschlussprojekt (Frontend), das Backend habe ich nachträglich selbst entwickelt, da das Original bei Bertrandt verblieben ist. Ein Chatbot, der mit einem FastAPI RAG-Backend verbunden ist. Nutzer können Fragen stellen und erhalten Antworten basierend auf den Daten, die in das Backend hochgeladen wurden.",
    tech: [
      "React",
      "JavaScript",
      "AntDesign",
      "CSS",
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Pydantic",
      "Azure DevOps",
      "Jest",
    ],
    github: "https://github.com/FireLighT1337/fullstack-abschlussprojekt",
    live: "https://fullstack-abschlussprojekt.vercel.app/",
    reference: "",
  },

  {
    image: "/Screenshot 2026-02-11 133903.png",
    position: "top",
    title: "RfQ Scanner Frontend",
    description:
      "Innerhalb eines internen Projektes bei Bertrandt hatte ich die Aufgabe, das bestehende Frontend des RfQ Scanners für mobile Geräte zu optimieren, um eine bessere Bedienbarkeit auf kleineren Bildschirmen zu ermöglichen. Ich verweise hier auf die Firmenseite, da ich keinen Code oder ähnliches zeigen kann, möchte damit aber belegen, dass ich tatsächlich an diesem Projekt mitgewirkt habe.",
    tech: ["React", "TypeScript", "Ant Design", "CSS", "Vite", "Azure DevOps"],
    github: "",
    live: "",
    reference: "https://www.bertrandt.com/bernd",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <Row className="mb-4 mb-md-5">
          <Col>
            <p className="section-label">
              Ein paar Sachen an denen ich gearbeitet habe
            </p>
            <h2 className="section-title">Projekte</h2>
            <p className="section-desc">
              Eine kleine Auswahl an Projekten an denen ich privat oder
              innerhalb meiner Ausbildung gearbeitet habe. <br />
              Jedes Projekt hat mir etwas Neues beigebracht.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.title} xs={12} md={6}>
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`Screenshot der Anwendung ${project.title}`}
                    className="project-image"
                    style={{
                      objectPosition: project.position,
                    }}
                  />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags-links">
                    <div className="tech-tags">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.reference && (
                        <a
                          href={project.reference}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          Firmenseite
                        </a>
                      )}
                    </div>
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
