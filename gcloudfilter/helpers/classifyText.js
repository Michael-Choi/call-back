const dotenv = require("dotenv").config();
const GOOGLE_APPLICATION_CREDENTIALS =
  process.env.GOOGLE_APPLICATION_CREDENTIALS;
const language = require("@google-cloud/language");
const client = new language.LanguageServiceClient();
const request = require("request");

async function classifyText(question, answer) {
  const document = {
    content: answer,
    type: "PLAIN_TEXT"
  };
  const [classification] = await client.classifyText({ document });
  console.log("Categories:", classification.categories);

  classification.categories.forEach(category => {
    console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
    if (
      category.name.toLowerCase().includes("job") &&
      category.confidence > 0.2
    ) {
      console.log("Success! this has been marked as job related");
      let options = {
        method: "POST",
        url:
          "https://api.genesysappliedresearch.com/v2/knowledge/knowledgebases/0c9a3997-fe2f-4a85-b568-c451d61c495e/languages/en-US/documents/",
        headers: {
          "Postman-Token": "ad58ae61-1ba8-4fac-ad64-ccc5bc23b34f",
          "cache-control": "no-cache",
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6IjhiZjk5NDI1LWVkNzgtNGY5OC05MzU3LWE1NDU4Mzk1ZTMwZiIsImV4cCI6MTU3MTU4ODUxMywiaWF0IjoxNTcxNTg0OTEzfQ.4ywEnPyzPZH6o8mklUmWjx5gDPrDUXCsKrlVGKy1r_4",
          organizationid: "8bf99425-ed78-4f98-9357-a5458395e30f",
          "Content-Type": "application/json"
        },
        body: {
          type: "faq",
          faq: {
            question,
            answer
          },
          externalUrl: "0"
        },
        json: true
      };

      request(options, function(error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        console.log("post request has been made");
      });
    }
  });

  return classification;
  //returns array of objects [{name:category, confidence:num}]
}
module.exports = classifyText;
