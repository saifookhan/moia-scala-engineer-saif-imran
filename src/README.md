# Coding Challenge - Solution

Railway dispatching system for the WunderReise GmbH. Solution by Saif Imran.
Now online on Heroku: https://moia-challenge-fe.herokuapp.com/

## Solution Specification

![Recording of the app](./docs/recording.gif)

### How to run?

There are two main projects to run.

1. Server:
   - `cd src/server`
   - `npm i`
   - `npm run start`
2. UI:
   - `cd src/ui`
   - `npm i`
   - `npm run start`

Then open `http://localhost:3000` in your browser.

#### Requirements:

NodeJS version: v14.17.3

### Overview

- The solution is broken down into three main sections:

  1. server

     - Handles the main business logic of the scheduler.
     - Uess REST apis for endpoints exposure.
     - Code is broken into modules for better readibility.
     - Specific type interfaces are used for return types.

  2. ui
     - Compromises of a table view with Train name, terminal info, train direction, number of passengers.
     - The UI updates every two seconds.
     - A form is available for adding a request.
  3. ci/cd
     - Github actions are used for auto deployment of code on Heroku.
     - Automated tests are also run in Github Actions.

### How algorithm works?

- When a request comes, before assigning to it any train, the algorithm finds out the _Minimum Service Cost_.
- Then the train which is closest from the source (minimum terminal difference) is assigned with that request.
  - For assignment, there is a Queue and the reqest is added to the queue with FIFO system.
  - The queue also handles concurrent requests. e.g.
    - Train is going from 2 to 20
    - Another request comes from 4 to 9
    - The request will be added to the queue of this train because it is already going in this direction.
- The clock tick is incremented with every request of `getAllTrains()` (dashboard update every two seconds).

### What could be done better?

- The `direction` property could be of ENUM (left, right) instead of an integer.
- Missed on endpoint where it was asked to change the state of a specific train.
  - How I would've done is that added a reset button. Which will ask all the passengers to get off from the train.
- I also wanted to add the functionality for `requestedTime` but couldn't complete it.
- Some logging in the frontend console could be hidden.
- I should'be squashed my commits before merging to main from the feature branches.

### Challenges

- Two projects in one repository made it hard to deploy on Heroku. I used git subtree for this.

=========

#### Project in progress. :)

Worked on the project during my flight.
Throughly enjoyed working on the challenge.
Thanks for the opporunity.

![Recording of the app](./docs/photo.jpg)
