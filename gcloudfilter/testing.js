var request = require("request");

var options = {
  method: "POST",
  url:
    "https://api.genesysappliedresearch.com/v2/knowledge/knowledgebases/a758dd00-9ffe-4a9b-8aa7-54687fc9330f/languages/en-US/documents/",
  headers: {
    "Postman-Token": "5621789b-e89b-46d8-9e84-92324a9abc0a",
    "cache-control": "no-cache",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6IjhiZjk5NDI1LWVkNzgtNGY5OC05MzU3LWE1NDU4Mzk1ZTMwZiIsImV4cCI6MTU3MTUzOTY5MSwiaWF0IjoxNTcxNTM2MDkxfQ.FdHiJmZTIostAWK-e1RSF3-MpyszZ7k6-SME_FnBCwk",
    organizationid: "8bf99425-ed78-4f98-9357-a5458395e30f",
    "Content-Type": "application/json"
  },
  body: {
    type: "faq",
    faq: {
      question: "What is the Dress Code Policy?",
      answer:
        "Usually, you dress in a suit on the weekdays and then fridays are casual"
    },
    externalUrl: "http://test.co/info/ae0e2bda-c58e-47ab-ba65-533deeaafa01"
  },
  json: true
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
