# call-back
Interview preparation tool that helps you get a call-back interview. 
This project utilizes Genesys and GoogleCloud natural language API.

The Genesys api is used to model and train a neural network of interview questions and answers. 
User input is used as a search query to return the most relevant questions and answers.

The GoogleCloud natural language api was used to filter training information. A post request with an array of objects made to our server will run a classification analysis of the text and conditionally add information to the Genesys knowledge model.   
