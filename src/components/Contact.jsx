import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/xykabajy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError(
          "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.",
        );
      }
    } catch {
      setError("Verbindungsfehler. Bitte überprüfe deine Internetverbindung.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <p className="section-label text-center">Schreib mir gerne</p>
            <h2 className="section-title text-center">Kontaktiere mich</h2>

            <p className="section-desc text-center mx-auto contact-description">
              Ob du nun eine Stelle zu vergeben hast, Fragen zu mir generell
              oder meinen Projekten hast oder einfach nur Hallo sagen möchtest,
              ich freue mich über deine Nachricht!
            </p>

            <div className="contact-card">
              {sent ? (
                <div className="contact-success text-center">
                  <div className="contact-success-icon">✓</div>
                  <h3>Nachricht gesendet!</h3>
                  <p>
                    Danke fürs Kontaktieren. Ich melde mich, sobald ich kann.
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
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="contact-label">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="max@company.com"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="contact-label">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Hey! Ich habe dein Portfolio gesehen und..."
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="contact-input contact-textarea"
                    />
                  </div>

                  {error && (
                    <p className="contact-error" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-custom contact-submit"
                  >
                    {loading ? "Wird gesendet..." : "Nachricht senden"}
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
