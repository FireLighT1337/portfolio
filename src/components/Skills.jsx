import { Container, Row, Col } from "react-bootstrap";

const skillGroups = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "C#", "SQL"],
  },
  {
    category: "Frontend",
    skills: [
      "Angular",
      "React",
      "RxJS",
      "NgRx",
      "Vite",
      "HTML5",
      "jQuery",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Ant Design",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Express",
      "FastAPI",
      "Spring Security",
      "JPA/Hibernate",
      "Thymeleaf",
      "Node.js",
      "EJS",
      "Axios",
      "OpenAPI/Swagger",
      "Flyway",
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
      "Azure DevOps",
      "Docker",
      "CI/CD",
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
    skills: ["Vitest", "Playwright", "JUnit", "Mockito", "Jest"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MySQL Workbench", "pgAdmin"],
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
