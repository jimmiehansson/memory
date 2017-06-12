![alt text](https://github.com/jimmiehansson/memory/blob/master/public/images/memoryinja.jpg?raw=true)

## Memory (card game with ninjas)
Simple memory card game. Card tiles are stateless components, data displayed in each tile will be fetched from an API. Store state will be used to remember which card tiles have been turned, removed from the board and used to refresh the random placement of each tile.

## How was this built?
These are some featured items from the toolchain used to build this game.

* Javascript, ES6/7 (https://www.ecma-international.org/ecma-262/6.0/)
* React (https://facebook.github.io/react/docs/react-api.html)
* Redux (http://redux.js.org/docs/api/)
* Redux Thunk (https://github.com/gaearon/redux-thunk)
* Reselect (https://github.com/reactjs/reselect)
* Electron (https://electron.atom.io/docs/)

## Where's the data?
All data will be fetched from a private API as a JSON object.


* What does the JSON look like?
```
{"name":"Master Ninja","imagePortraitUrl":"//secretaddress.xxx/files/master-ninja","index":0,"filename":"master-ninja"}
```

## Screenshot

![alt text](https://github.com/jimmiehansson/memory/blob/master/public/images/memorinjascore.PNG?raw=true)


# Why
This project was made as an assignment for an interview at the company Tretton37.

## How long did it take?
This project from none to completion took 10 days.

## Any words?
Yeah, a big shout to my pregnant wife for her support.

## Special thanks to
* NoiseForFun for the audio (http://www.noiseforfun.com/)
* VectorCharacters.net for the ninja (http://vectorcharacters.net/ninja-vector-characters/ninja-vector-character-2)