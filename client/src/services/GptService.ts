
interface GptData {
    controller: string;
    criteria: string;
    email: string;
  }

  type Feedback =
  |{ status: string }
  |{ status: string, payload: JSON }
  |{ status: string, error: any }

export class GptService {
    public async send(gptData: GptData): Promise<Feedback> {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gptData),
          };

          return await fetch("https://aitroopers.com/api/generateTest", requestOptions)
            .then((response) => response.json())
            .then((json) => {
                return ({ status: "loaded", payload: json });
            })
            .catch((error) => {
              console.log(JSON.stringify(error));
              return ({ status: "error", error });
            });
    }
}