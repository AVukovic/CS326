# Euler on Canvas (Project 03 Submission - FINAL) 

# Team Members

1. Tamas Palfi, tamaspalfi@umass.edu
2. Alexander Vukovic, avukovic@umass.edu
3. E. Malcolm Braverman, ebraverman@umass.edu

# Application Initialization

To use this application you should have `node` and `npm` installed and issue the following commands:

1. `npm install`: this will install the required `node` libraries.
2. `npm run watch`: this will compile the application code and produce an `App.js` file in the `static` directory. This command will also continue to run until explicitly killed (e.g., control-C).
3. `npm start`: this will run the Express server, `server.js`, allowing you to view the running application in the browser window.

# Project Description

Euler on Canvas is an app that allows you to encrypt messages and decrypt them at a later date. 

We achieve this through a classic method of encryption- the Caesarian Cypher. The Caesarian Cypher works by offsetting each letter in a given string of text by a number between 1 and 25. For example, if our offset value is 2, the message abc would become cde. If our offset was 25, the message would become zab.

In order to decrypt messages, we use the coded messages and apply the inverse of the original cypher. The inverse is found by subtracting the offset from 26. Harkening back to our original example, the inverted offset of 2 is now 24. The string cde offset by 24 yields abc, our original message.  This would be confirmed to be in the database, and if it correctly is then it will be retrieved from the database and outputted.  

# Project 3 Extension

The main goal of our extension of the project from Phase 2 to Phase 3 was working on creating a better looking UI.  We approached this by adding more complex HTML and CSS that styled our frontend app better such as fixing box margins to make better looking alignment or changing some of our text to bold to highlight its importance.  The main change that was introduced was more usage of Bootstrap' components to create a cleaner and more slick UI.  Example changes included adding a gradient-touched NavBar that really makes the app look better and adding cleaner button formats and output text boxes.  

# Github URL

https://github.com/AVukovic/CS326

# Video Link

https://youtu.be/JxwitKztNK0 
