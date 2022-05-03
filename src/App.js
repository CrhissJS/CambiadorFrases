import quotes from './quotes.json'
import Phrase from './components/Phrase'

function App() {

  console.log(quotes);

  return (
    <div className="App">
      <Phrase />
    </div>
  );
}

export default App;
