![alt text](https://github.com/jimmiehansson/memory/blob/master/public/images/memoryinja.jpg?raw=true)

## Memory (card game with ninjas)
Simple memory card game. Card tiles will function as components, data in each component will be fetched from an API. Store state will be used to remember which card tiles have been turned, removed from the board and used to refresh the random placement of each tile.

## How was this built?
These are some featured items from the toolchain used to build this game.

* Javascript, ES6/6 (https://www.ecma-international.org/ecma-262/6.0/)
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

# Why
This project was made for an interview at the company Tretton37.

