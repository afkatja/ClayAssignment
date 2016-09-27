# Clay Assignment

## The Assignment
- an interface for Web and/or Mobile with 2 doors: Front Door and Storage Room
- four employees
- only employees with the proper authorization can open the doors

## Functional requirements
1. An Input screen to define doors and people
2. A screen to set authorization for opening the doors
3. A screen that allows users to click “open door”
4. Every door opening or rejection needs to be displayed in an events list

## Overview
This project is written in .NET Core so you might have to [install it first](https://www.microsoft.com/net/core).

It also depends on [node](https://nodejs.org/en/) & [npm](https://www.npmjs.com/).

The client of the application is written in [Reactjs](https://facebook.github.io/react/) and relies heavily on [Material UI](http://www.material-ui.com/).

## Run
- Check out the repository
- `cd <project dir>`
- run `npm install` (you might need to do `sudo npm install`)
- after all packages are installed, run `npm run watch`
- run `dotnet restore` in another tab
- after all .NET core packages are installed, run `dotnet run`
- test the project on `http://localhost:5000`
