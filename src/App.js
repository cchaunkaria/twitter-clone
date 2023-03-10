
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">

      {/*  Sidebar */}
      <Sidebar />

      {/*  FEED */}
      <Feed />

      {/*  Widgets */}
      <Widgets />

    </div>
  );
}

export default App;
