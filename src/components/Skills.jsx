import { Container, Row, Col } from "react-bootstrap";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "EJS", "Python", "C#"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Bootstrap", "Node.js", "Express", "Axios", "jQuery"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Azure", "VS Code", "PyCharm", "Docker"],
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
              Technologien, die ich im Rahmen meiner Ausbildung in Projekten und
              Kursen erlernt habe. Allerdings bin ich natürlich immer offen für
              neue Technologien und lerne gerne dazu.
            </p>
          </Col>
        </Row>

        <Row className="g-6">
          {skillGroups.map((group) => (
            <Col key={group.category} sm={6} lg={3}>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#112e81",
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  marginBottom: "0.75rem",
                }}
              >
                {group.category}
              </p>
              <div>
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
