import { Container } from "react-bootstrap";

export function Home() {
  return (
    <Container>
      <h1>AI Troopers</h1>
      <div className="d-flex flex-column justify-content-center">
        <p>
          A Calaborative Trio of Access developers brought together in an
          attempt to create next generation AI chatGPT assisted app.
        </p>
        <img src={"/images/chatgpt.jpg"} alt="AI text" />
      </div>
    </Container>
  );
}
