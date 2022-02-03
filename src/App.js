import './App.css';
import AudioList from './components/AudioList';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App m-20">
      <Header />
      <h2 className="mtb-20 app-quote">
        Find the best music for your code
      </h2>
      <SearchInput />
      <Tabs />
      <AudioList />
    </div>
  );
}

export default App;
