import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Fedd";
import Widgets from "./components/widgets_/Widgets";
function App() {
  return (
    <div className="app">
      {/* sider bar */}
      <Sidebar />
      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
