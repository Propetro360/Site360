import axios from "axios";
import cheerio from "cheerio";

// Set up the login URL and the login credentials
const loginUrl = "https://propetro.intelie.com/j_spring_security_check";
const username = "systemaccount@propetroservices.com";
const password = "Propetro1";

export async function csvData() {
  // Set up the session object
  const session = axios.create({
    withCredentials: true,
  });

  // Send a POST request with the login credentials
  session
    .post(loginUrl, {
      j_username: username,
      j_password: password,
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    })
    .finally(() => {
      const response = session
        .get("https://propetro.intelie.com", {
          responseType: "document",
        })
        .then((res) => {
          const html = res.data;
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(html, "text/html");
          const metatags = html.head.querySelectorAll("meta")
        //   console.log(metatags[metatags.length-1].content);

          // Retrieve CSRF token from the response headers

          const csrfToken = metatags[metatags.length-1].content;

          // Use the CSRF token to authenticate subsequent requests

          // ...

          // Example: Get data from a protected resource

          const dataUrl =
            "https://propetro.intelie.com/services/plugin-propetro-custom-download/propetro/custom-download/mnemonic-values-by-span";

          const headers = {
            accept: "*/*",

            "accept-encoding": "gzip, deflate, br",

            "accept-language": "en-US,en;q=0.9",

            "content-type": "application/json",

            "live-timezone": "America/Chicago",

            "x-csrf-token": csrfToken,
          };

          const payload = {
            eventType: "black",

            crew: "black",

            span: "tz 'America/Chicago' (2023-03-07 09:00 to 2023-03-07 09:40)",

            outputMnemonics: ["Blender Selected Discharge Rate", "Pressure 1"],

            includeCalculatedChannels: false,

            outputFrequency: "1 sec",
          };

          session
            .post(dataUrl, payload, {
              headers,
            })

            .then((response) => {
              // Handle the response

              const csvData = response.data;

              // Convert CSV data to regular text

              const rows = csvData.split("\n");

              const text = rows
                .map((row) => row.split(",").join(" "))
                .join("\n");

              // Print or use the converted text

              console.log(text);
            })

            .catch((error) => {
              // Handle the error

              console.error(error);
            });
        });
    });
}
