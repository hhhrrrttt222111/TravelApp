# Travel App

<p align="center">
<img alt="travelapp" src="./client/src/assets/logo.png" width="200px" />
</p>

### This is a Travel Booking site made using MERN Stack.

<br> <br>

## Installation
### Clone the repo

```
git clone https://github.com/hhhrrrttt222111/TravelApp.git
cd TravelApp
```
### Install Server packages from the root directory
```
npm install
```
### Install Client packages
```
cd client
npm install
```


## Usage
### Create `dev.js` file inside `./server/config` and add your MongoDB connection string into `dev.js` file as shown below.
```
module.exports = {
    mongoURI: "mongodb+srv://<username>:<password>@cluster0.podra.mongodb.net/<dbname>?retryWrites=true&w=majority"
}
```
### Create a an empty folder named `uploads` in the root directory fro storing images.

## Run from the root directory
```
npm run dev
```
