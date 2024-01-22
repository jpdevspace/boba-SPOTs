# boba-SPOTs

Boba SPOTs it's a web app to find the best boba spots near your office.

## Usage
This app has two folders, a folder named "client" which contains all the code for the frontend application built with React. Another folder named "server" which contains a Node.js application. More details below if you're interested.

To run the app 
1. Clone the repo to your local machine
2. Navigate to the client folder and run 
```bash
npm install
```
3. Navigate to your server folder and run 
```bash
npm install
```
4. In your server folder create a .env file to store your Yelp API key, I left a .env.example file so you can see how it looks, just make sure you replace the key with your actual key.

5. Now we can start both apps, in your server folder run
 ```bash
node app.js
```
or if you have nodemon installed (which I highly recommend for development) you can run
```bash
nodemon app.js
```

6. In your client folder run
```bash
npm run dev
```

## Additional Info
In the assets folder at the root of the project, I'm leaving some of the things I used when I was defining the scope of the project. 
A little mockup for the UI and an overview of the 2 systems I was going to create (client and server)

Due to the time constraint I left out the pagination feature, I prioritized staying as close to the 4 hour mark as possible.

## Things I would have done given more time
These are some of the things I wanted to get in there but I couldn't fit them in the time window: pagination, some sort of basic caching (I'm assuming new boba shops aren't opening every day), testing and actually deploying the app so you could see it live 


## Tech Stack
* React
* Node.js
* Express
* Vite