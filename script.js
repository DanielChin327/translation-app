const apiURL = "" //Write the URL Here.

const displayTranslation = (event) => {
  event.preventDefault(); //Prevents the page from just reseting after pressing the Translate Button.
  const word = document.querySelector("textToTranslate");

  fetch (apiURL + word)
    .then(response => response.json())
    .then(data => {
      const translation =
    })
}



async function translateText() {
  const res = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
          q: "Tree",
          source: "en",
          target: "ja",
          format: "text",
          api_key: ""
      }),
      headers: { "Content-Type": "application/json" }
  });

  const data = await res.json(); // Parse the JSON from the response
  console.log(data);             // Log the response data
};
