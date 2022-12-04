# Discord Mirror
Mirror messages from any server to any channel.

## Installation
- Install [nodejs](https://nodejs.org/en/download/)
- Grab your discord token by pasting [this](https://gist.github.com/rohzzn/34341c3787b8279aaf9d47a59331570f) in browser discord console
- Create a new webhook and copy the URL
- Copy the channel ID of the channel you are mirroring
- Replace the token, webhook URL, Channel ID in `app.js`
- Run the following commands to start the process
```
npm init
npm i selfcore
npm app.js
```
- Run these commnands if you want to continue the process without having the IDE open
```
npm install forever -g
forever start app.js
forever list
forever stop [number]
```
