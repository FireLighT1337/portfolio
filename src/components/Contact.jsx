import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xykabajy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
  }

  return (
    <section id="contact" className="section section-alt">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <p className="section-label text-center">Schreib mir gerne</p>
            <h2 className="section-title text-center">Kontaktiere mich</h2>
            <p className="section-desc text-center mx-auto mb-5">
              Ob du nun eine Stelle zu vergeben hast, Fragen zu mir generell
              oder meinen Projekten hast oder einfach nur hallo sagen möchtest,
              ich freue mich über deine Nachricht!
            </p>

            <div className="contact-card">
              {sent ? (
                <div className="text-center py-4">
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    ✅
                  </div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                    Nachricht gesendet!
                  </h3>
                  <p>
                    Danke fürs Kontaktieren, ich melde mich sobald ich kann.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="contact-label">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Max Mustermann"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="contact-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="max@company.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="contact-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Hey! Ich hab dein Portfolio gesehen und..."
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="contact-input"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-custom w-100 text-center border-0 cursor-pointer"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
