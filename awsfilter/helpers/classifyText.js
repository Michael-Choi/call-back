const dotenv = require("dotenv").config();
const GOOGLE_APPLICATION_CREDENTIALS =
  process.env.GOOGLE_APPLICATION_CREDENTIALS;
const language = require("@google-cloud/language");
const client = new language.LanguageServiceClient();

// const text =
//   "Why do you want this job? Again, companies want to hire people who are passionate about the job, so you should have a great answer about why you want the position. (And if you don't? You probably should apply elsewhere.) First, identify a couple of key factors that make the role a great fit for you (e.g., I love customer support because I love the constant human interaction and the satisfaction that comes from helping someone solve a problem), then share why you love the company (e.g., “I’ve always been passionate about education, and I think you guys are doing great things, so I want to be a part of it”).";

async function classifyText(text) {
  const document = {
    content: text,
    type: "PLAIN_TEXT"
  };
  const [classification] = await client.classifyText({ document });
  console.log("Categories:", classification.categories);

  classification.categories.forEach(category => {
    console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
    if (category.name.includes("job") && category.confidence > 0.2) {
      //TODO make the post request to GENESYS API HERE
    }
  });

  return classification;
  //returns array of objects [{name:category, confidence:num}]
}
classifyText(text);
