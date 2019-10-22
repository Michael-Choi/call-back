# call-back

Express - React - Node

Interview preparation tool that helps you get a call-back interview.
This project utilizes Genesys and GoogleCloud natural language API.

The Genesys api is used to model and train a neural network of interview questions and answers.
User input is used as a search query to return the most relevant questions and answers.

The GoogleCloud natural language api was used to filter training information. A post request with an array of objects made to our server will run a classification analysis of the text and conditionally add information to the Genesys knowledge model.

To start the client:
Run

```
npm install
npm start
```

To start the server:

```
cd gcloudfilter
npm install
npm start
```

Make post requests to localhost:8080/rawdata

Ensure that the post request is in json format, refer to the json file found at:

docs/routefilter.json

As a reference

1. Home page

   !["Home page"](https://github.com/Michael-Choi/call-back/blob/master/docs/homescreen.png)

2) Write an interview question!
   !["Write an interview question!"](https://github.com/Michael-Choi/call-back/blob/master/docs/queryresults.png)

3) Practice with a random interview question!
   !["Practice with a random interview question!!"](https://github.com/Michael-Choi/call-back/blob/master/docs/randomquestion.png)
