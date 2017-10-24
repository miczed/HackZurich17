# PeakPass
## HackZurich 2017

## What it does

With PeakPass, we want to motivate travellers in rush hours to take other connections than the heavily loaded public transport they would normally take.

## How we built it

We built the whole project with React Native and tested it on the iOS Simulator on macOS and on iPhones.

## Challenges we ran into

At the beginning we thought the basic idea of our app would be rather simple, but the complexity appeared as soon as we talked about the implementation and went into more detail. What are actually alternative connections a traveller would pick and how can we get them through the provided APIs? How can we really motivate the user by elements of gamification? How should the user confirm that he took another connection with less capacity and how can the app make sure he is not cheating? Furthermore interacting with the API of SBB was quite challenging because the most important datapoints about the capacity of the trains weren't publicly available during the Hackathon. Even the experts from SBB couldn't resolve the problem. That's why we had to mock some of the data instead of getting it from the API.

## Accomplishments that we're proud of

Thinking about the whole user experience from the beginning until the end really helped us gaining an overall view of the app. We discussed about a lot of details, both from the user and from the developer perspective. We're so proud of the user interface we designed and developed in our prototype and think it could really create an impact.

We spent a lot of time thinking about the real-world usage and feasibility of our product. In our opinion the look and feel of a modern application is as important as the technical aspects of it.

## What we learned

The public transport system is way more complex than we thought it would be. Finding a good connection from a starting point to an end point is not that trivial if you consider additional factors as duration of the journey and waiting time. What defines the quality of a good journey? Currently all existing solutions optimize for speed and comfort (as less transfers as possible). Finding a way to focus on the capacities of the trains as well was quite challenging.

## What's next for PeakPass

Further extending the prototype to have a fully functional first version of the app. After some real user feedback and improvements we would be able to make the app even better :-)

## Figma Doc

Check out our Figma doc for User Interface, Branding and Design work:

https://www.figma.com/file/Txy2CmYrqZaEvEqTEZ0O5C6v/PeakPass

## Run the Project

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

First, ensure to have all necessary packages installed via `npm install`.

You can build the project by running the following commands: 

* `npm start`
* `npm run ios` (only on macOS)

## Contributors

* **Michael Ziörjen** – [miczed](https://github.com/miczed)
* **Pascal Emmenegger** – [pemmenegger](https://github.com/pemmenegger)
* **Martin Bucher** - [mnbucher](https://github.com/mnbucher)
