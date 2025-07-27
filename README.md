# bioma-task
This project is created to complete an exercise for Kilo Health QA Automation Role. 

Email page: ```https://ecommerce-bioma-react-bioma-next-sandbox.cl2.kilo.live/weight-loss/email```

The given task: cover the email page with automation tests. When the email form is submitted, the lead API is called, and the lead code will be returned in response. 
- Verify the created lead email in the database matches the entered one. Fetching of the lead data by lead code is possible by using this API: ```https://api.bioma.health/api/leads/{{leadCode}}?api_token=6280e81f-fe64-441c-ab90-c3234a6b085f```
- Apart from email verification in lead response, any other tests are welcome.
- Please provide the documentation on how to run the project/tests.

# Running the tests
When opening the project for the first time run ```npm install``` to install required packages.
To run the tests only one command is needed ```npm run test```.

This runs all the tests and since there are only 3 of them, I did not use tags for seperating them. Should you need to see what is going on and debug, you can pass in the ```--debug``` flag to enable debugging console. ```--headed``` runs the tests in headed mode.

# Thought process and steps I took

First I analyze the link. I go back to the ```https://ecommerce-bioma-react-bioma-next-sandbox.cl2.kilo.live```, which shows me the landing page of Kilo products. This allows me to get a feeling on how the website looks and what kind of structure is needed to store Page object models (POMs) efficiently and organized. After exploring for a bit I can see that most of the pages reuse the same UI elements, so it wouldn't make sense to make POM for each product line and they should be reused in some capacity. Since I am only looking at one product, my solution will be focused on that, however if there is a decision where I can make something modular, I will.

Going to weight loss product page, I can see that taking the quiz takes me to the email page that I am supposed to write automated tests for. The thought process of naming POM is usually done by looking at the URL path as this makes it easier to place the POM in a neat, organized fashion. I went ahead and clicked on a couple of links and saw that for the most part there is no higher level of hierarchy so models can be placed in one folder (atleast for weight-loss product). 

Proceeding to creating email page POM. It's a simple page that has an input, a button that user can interact with and an error message that is displayed when wrong email is inserted. Seeing how I do not have page translation files, which I would use to make the selectors reusable in multiple languages and immune to translation changes, I will write my selectors with the values that I am currently seeing in English. 

Since one of the tests requires me to look at network activity, I have created a separate file for API helper functions that I can reuse. Also a file for types is useful to imitate using type safety in a real project. 

I have covered three scenarios: 
- a happy path, where user enters their email, they proceed to the summary page and their email is saved in the database and checked with a GET request. 
- When user enters incomplete email and the button to submit is disabled. When user enters wrong email an error is displayed to the user. 
- All these scenarios can be merged into one to create the true e2e test. 

# Further improvements

- Move base API url to an env file for easier modification when needed to switch between testing environments. 
- Possible improvements on waiting steps for requests since they clutter up the code a fair amount. 