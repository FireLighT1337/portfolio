import { Container, Row, Col } from "react-bootstrap";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "C#", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Angular",
      "Vite",
      "Bootstrap",
      "Express",
      "Axios",
      "FastAPI",
      "Passport",
      "bcrypt",
      "jQuery",
      "EJS",
      "RxJS",
      "NgRX",
      "LangChain",
      "Pydantic",
      "Jest",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["Docker", "Azure DevOps", "GitHub", "VS Code", "PyCharm"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <Container>
        <Row className="mb-5">
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

        <Row className="g-4">
          {skillGroups.map((group) => (
            <Col key={group.category} sm={6} lg={3} className="mb-lg-0">
              <p className="skill-category">{group.category}</p>
              <div className="skill-pill-container">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    <span className="skill-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
