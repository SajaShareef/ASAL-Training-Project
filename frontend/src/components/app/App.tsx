import Mainpage from '../../pages/mainpage';
import { Appcontainer } from './App.styles';

function App() {

  return (
    <Appcontainer data-testid="app">
      <Mainpage/>
    </Appcontainer>
  );
}

export default App;