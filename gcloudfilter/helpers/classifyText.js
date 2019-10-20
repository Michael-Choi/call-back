const dotenv = require("dotenv").config();
const GOOGLE_APPLICATION_CREDENTIALS =
  process.env.GOOGLE_APPLICATION_CREDENTIALS;
const language = require("@google-cloud/language");
const client = new language.LanguageServiceClient();
const request = require("request");

// let a = "Why do you want this job job job?";
// let b =
//   "This post is about jobs. Making sure that google marks this as jobs. Again, companies want to hire people who are passionate about the job, so you should have a great answer about why you want the position. (And if you don't? You probably should apply elsewhere.) First, identify a couple of key factors that make the role a great fit for you (e.g., 'I love customer support because I love the constant human interaction and the satisfaction that comes from helping someone solve a problem'), then share why you love the company (e.g., “I’ve always been passionate about education, and I think you guys are doing great things, so I want to be a part of it”).";

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
          "https://api.genesysappliedresearch.com/v2/knowledge/knowledgebases/a758dd00-9ffe-4a9b-8aa7-54687fc9330f/languages/en-US/documents/",
        headers: {
          "Postman-Token": "ad58ae61-1ba8-4fac-ad64-ccc5bc23b34f",
          "cache-control": "no-cache",
          token: process.env.TOKEN,
          organizationid: process.env.ORGANIZATION_ID,
          "Content-Type": "application/json"
        },
        body: {
          type: "faq",
          faq: {
            question,
            answer
          },
          externalUrl:
            "http://test.co/info/d6d2d9c5-09ca-4443-ba9b-cebaa52cf5de"
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
