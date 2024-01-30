import { Provider } from 'react-redux';
import Search from './components/Search/Search';
import { store } from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}
export default App;

