import { Provider } from 'react-redux';

import NavBar from './components/NavBar';
import HomePage from './components/Home';
import { store } from './store/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <NavBar />
    <HomePage />
  </Provider>
);

export default App;
