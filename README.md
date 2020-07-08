# Project description

Hey here! This is my test React project to implement all learned skills.
This is a simple TODO-list with **no persistent state**.

The first part was aimed **to create React** components while the second one was done in order **to learn Redux** and its integration with React components.
Also at the end of the page one can see Form example which comes from test with **Material UI** for React.

### The TODO-list (with Redux part) **is able to do**:

- **list** todo items from initstate (hard-coded for now)
- **mark** todo-item as done/undone, change its style
- **remove** todo-item from the list
- **add** a new todo-item to the list

### The project includes next **technics/packages**:

- **React Js project basic structure**
  - state
  - props
  - events, onChange()
  - Live Cycles Hooks (were removed after react hooks have been learnt)
    - componentDidMount
    - componentDidUpdate
    - shouldComponentUpdate
    - getDerivedStatedFromProps
    - getSnapshotBeforeUpdate
    - componentWillUnmount
    - componentDidCatch
  - useEffect() react hooks
  - styled Components
- **Redux basic structure**

  - useState(), useDispatch(), createStore()
  - special code structure for actions/reducers/types/views
  - state and immutability
  - combine reducers
  - middleware, thunk
  - containers & components

- **Unit tests with Jest**

  - toBeTruthy()
  - toBeInTheDocument()

- **Material UI** components:
  - Input, Select, MenuItem
  - Icons
  - BottomNavigation, BottomNavigationAction
  - AppBar, Toolbar, Typography, Button, IconButton
  - Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText

As learning material were used mainly Youtube videos and in some cases technical documentation.

### All learned sources are stated below (**as Links** to YouTube or webpages):

- [React Crash course, part1](https://www.youtube.com/watch?v=pgAvVxowaYU)
- [React Crash course, part2](https://www.youtube.com/watch?v=sBws8MSXN7A)
- [React Refs](https://www.youtube.com/watch?v=FXa9mMTKOu8)
- [Redux, part1](https://www.youtube.com/watch?v=93p3LxR9xfM)
- [Redux, part2](https://www.youtube.com/watch?v=qrsle5quS7A&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_)
- [React Hooks](https://www.youtube.com/watch?v=-MlNBTSg_Ww)
- [Life Cycles](https://www.youtube.com/watch?v=m_mtV4YaI8c)
- [Dependency injection, part1](https://www.youtube.com/watch?v=0X1Ns2NRfks)
- [Dependency injection, part2](https://www.youtube.com/watch?v=sD94szvFqGw)
- [Jest/Unit tests in JS](https://www.youtube.com/watch?v=7r4xVDI2vho)
- [Styled-components](https://www.youtube.com/watch?v=NMiEREulVLc)
- [GraphQL API, basic level](https://www.youtube.com/watch?v=PeAOEAmR0D0)
- [Overwrtie css of Material UI, part1](https://material-ui.com/ru/customization/components/)
- [API of Material UI, part2](https://material-ui.com/ru/api/app-bar/)
- [Type script part1](https://www.youtube.com/watch?v=BwuLxPH8IDs)
- [Type script part2](https://www.youtube.com/watch?v=rAy_3SIqT-E)

# Tech Info:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
