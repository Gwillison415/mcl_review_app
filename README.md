# mcl_review_app

## how to run
### ` yarn && yarn start`


## Project modelling
First I considered the landscape of possible needs for this app. 
 ## The client 
 We're thinking about static vs dynamic pages, SSR vs client side rendering. 

### Design Decisions & Challenges
I chose a Material UI as a CSS library -reasoning that a snappy UX with a 'good enough' UI was my best avenue for going deeper into other aspects of the coding challenge.
It gave me access to 'SwipeableDrawer' which is optimized for mobile screens.

I went with the standard flex box design provided by material, such that it works out of the box on multiple breakpoints. 
I strive to learn something every time, so instead of using redux to create a global state container I leveraged my knowledge to learn / implement the Context API for the first time.

Debouncing results was a challenge for me. I strongly considered redux-saga for debouncing the search bar that Displays visual results as the user types.  In the end I couldn't justify it's overhead / 'wetwear cost' when compared with ```React.useCallback + lodash/debounce``` to create ```debounceHandleSearch``` in just a few lines. I might make different decisions on a larger app where more was going on, but I always need to consider KISS if possible and make it more straightforward on other developers. 

Apollo client is the gold standard of GQL clients, so I used it in basic form to highlight best practices: separation of concerns / code organization / DRY patterns

Speaking of DRY - I separated components where they made logical sense to do so by considering other consumer use cases and their data structures.  I did not focus on my component folder structure for a couple important reasons. 
* I think clean code is a must, but developers need to be laser focused on other's experiences - not your own.
* It's often more important to get things up and moving faster, and consider more perfect solutions as they mature, clarify and the intention settles.
 ## The back end 
 We're thinking about how to model the data and what type of tooling helps set us up for the short term and where feasible, also  the long term.

### Design Decisions & Challenges
I enjoy schema design and had been meaning to develop my own graphql API with Hasura -after enjoying it at my last job. I wanted to create a powerful search feature based on any data in the data base instantly available from a front end search - whilst keeping that time cost as low as possible. That's why I choose a backend-for-frontend technology like GQL. It also gave me hundreds of API CRUD options out of the box - including the rating average stats from all aggregate ratings in the Postgres DB. 


# QuickStart

 ## back end 
 #### We'' be using the Hasura GraphQL Engine on Docker

This Docker Compose setup runs [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) along with Postgres using `docker-compose`.

## Pre-requisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Usage

- Clone this portion of the repo on a machine where you'd like to deploy graphql engine
- `docker-compose up -d`

GraphQL endpoint will be `http://localhost:8080/v1/graphql`
Console will be available on `http://localhost:8080/console`
    `cd nyt_reviews_backend/ && docker-compose up -d`


composeable components, semi-independent of direct need

## Front end
### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. This is currently configure to only 'talk' to a local api instance.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
