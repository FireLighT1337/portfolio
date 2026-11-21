import { Container, Row, Col } from "react-bootstrap";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Java",
      "C#",
      "Python",
      "SQL",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Angular",
      "RxJS",
      "NgRx",
      "Bootstrap",
      "Tailwind",
      "AntDesign",
      "jQuery",
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Axios",
      "FastAPI",
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "Thymeleaf",
      "OpenAPI/Springdoc",
      "Flyway",
      "EJS",
      "Passport",
      "bcrypt",
      "JWT",
      "Pydantic",
      "LangChain",
      "ChromaDB",
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Docker",
      "Azure DevOps",
      "Vercel",
      "Northflank",
      "Maven",
      "npm",
      "Postman",
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA",
    ],
  },
  {
    category: "Testing",
    skills: ["Jest", "Vitest", "Playwright", "JUnit", "Mockito"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "pgAdmin", "MySQL Workbench"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <Container>
        <Row className="mb-4 mb-md-5">
          <Col>
            <p className="section-label">Womit arbeite ich?</p>
            <h2 className="section-title">Skills & Tech Stack</h2>
            <p className="section-desc">
              Technologien, die ich im Rahmen meiner Ausbildung und privat in
              Projekten und Kursen erlernt habe. Allerdings bin ich natürlich
              immer offen für neue Technologien und lerne gerne dazu.
            </p>
          </Col>
        </Row>

        <Row className="g-4 g-md-5">
          {skillGroups.map((group) => (
            <Col key={group.category} xs={12} md={6}>
              <div className="skill-group">
                <p className="skill-category">{group.category}</p>

                <div className="skill-pill-container">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      <span className="skill-dot" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
