const apiURL = "https://translation.googleapis.com/language/translate/v2";
const apiKey = "YOUR_GOOGLE_CLOUD_API_KEY"; // Replace with your actual API key

const translateToJapanese = async (event) => {
  event.preventDefault();
  console.log("Translate button clicked");

  let textToTranslate = document.querySelector("#textToTranslate").value;
  const japOutput = document.querySelector(".japaneseResult");

  console.log("Text to translate:", textToTranslate);
  console.log("Japanese Result element:", japOutput);

  japOutput.innerHTML = "Translating...";  // Indicate that translation is in progress

  // Add a period at the end if it doesn't already have one
  if (!textToTranslate.endsWith(".")) {
    textToTranslate += ".";
  }

  try {
    const res = await fetch(`${apiURL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: textToTranslate,
        source: "en",
        target: "ja",
        format: "text"
      })
    });

    const data = await res.json();
    console.log("API response:", data);

    if (data.data && data.data.translations && data.data.translations[0]) {
      japOutput.innerHTML = data.data.translations[0].translatedText;
    } else if (data.error) {
      japOutput.innerHTML = `Error: ${data.error.message}`;
    } else {
      japOutput.innerHTML = "Translation not available.";
    }
  } catch (error) {
    console.error("Error:", error);
    japOutput.innerHTML = "Error in translation.";
  }
};

const form = document.querySelector("#translateionForm");
form.addEventListener("submit", translateToJapanese);












/*
// The following is an example of using Dictionary
const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const displayDefinition = (event) => {
  event.preventDefault();
  const word = document.getElementById("word").value;
  // TODO: Display your age with an AJAX call instead of the console.log()
  fetch(apiUrl + word)
    .then(response => response.json())
    .then(data => {
      const definition = data[0].meanings[0].definitions[0].definition;
      const definitionElement = document.getElementById("definition");
      definitionElement.innerHTML = definition;
    })
}

const form = document.getElementById("fetch-word");
form.addEventListener("submit", displayDefinition);
*/
