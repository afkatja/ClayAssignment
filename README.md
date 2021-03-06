# Clay Assignment

## The Assignment
- an interface for Web and/or Mobile with 2 doors: Front Door and Storage Room
- four employees
- only employees with the proper authorization can open the doors

## Functional requirements
- [x] An Input screen to define doors and people
- [x] A screen to set authorization for opening the doors
- [x] A screen that allows users to click “open door”
- [ ] Every door opening or rejection needs to be displayed in an events list

## Overview
This project is written in .NET Core so you might have to [install it first](https://www.microsoft.com/net/core).

It also depends on [node](https://nodejs.org/en/) & [npm](https://www.npmjs.com/).

The client of the application is written in [Reactjs](https://facebook.github.io/react/) and relies heavily on [Material UI](http://www.material-ui.com/).

The css and DOM features used might not work in some browsers. It is only tested in Chrome and Safari (both latest).

## Demo
### Logged in user 
![](clay-demo-logged-in.gif)

### Not authorized user

![](clay-demo-unauthorized.gif)

## Run
- Check out the repository
- `cd <project dir>`
- run `npm install` (you might need to do `sudo npm install`)
- after all packages are installed, run `npm run watch`
- run `dotnet restore` in another tab
- after all .NET core packages are installed, run `dotnet run`
- test the project on `http://localhost:5000`

## Known bugs
- the state of the door is not persistent (after refresh, the state returns to initial)
- user authorization is not real (should be read from the cookie, but it is read from `localStorage`)
- added doors are saved also to the `localStorage`
- the list of events is not implemented
