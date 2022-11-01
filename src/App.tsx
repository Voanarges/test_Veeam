
import 'src/assets/styles/scss/total.scss'
import './App.css';
import ConfigForm from './components/ConfigForm';
import StorePovider from './store/index'
function App() {

  return (
    <div className="App">
        <main>
          <StorePovider>
            <ConfigForm/>
        </StorePovider>   
        </main>
    </div>
  );
}

export default App;
