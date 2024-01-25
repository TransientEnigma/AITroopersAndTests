import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Form } from "./components/Form";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GptService } from "./services/GptService";

interface GptData {
  controller: string;
  criteria: string;
  email: string;
}

type Feedback =
  |{ status: string }
  |{ status: string, payload: JSON }
  |{ status: string, error: any }

function App() {
  const [gptResult, setGPTResult] = useState<Feedback>({ status: "ready" });
  const [feedback, setFeedback] = useState<string>("");

  let gptService: GptService = new GptService();

  useEffect(() => {
    console.log(`gptResult feedback return: ${JSON.stringify(gptResult)}`);

    setFeedback(JSON.stringify(gptResult));
  }, [gptResult]);

  async function handleSubmit(gptData: GptData) {
    console.log(`gptData being sent: ${JSON.stringify(gptData)}`);

    const gptResponse = await gptService.send(gptData);
    setGPTResult(gptResponse);
  }

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/openai" element={<Form onSubmit={handleSubmit} feedback={feedback} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
