import './App.css';
import IndexPage from './components/pages/indexPage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <IndexPage introText={'Lovely useless app to check a result from an API :)'} imgRef={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.atelevisao.com%2Fwp-content%2Fuploads%2F2018%2F10%2Ffernando-mendes-preco-certo.jpg&f=1&nofb=1&ipt=e7ba09e08878645f0b0ba510da66f06f0471d2816e18df5cabe6cfb676d061ee&ipo=images'}/>
      </header>
    </div>
  );
}

export default App;
