import style from'./App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {Route,Routes} from 'react-router-dom';
import AccountContainer from './components/Account/AccountContainer';
import SupportContainer from './components/Support/SupportContainer';

function App(props) {

  return (
      <div>
        <div className={style.appwrapper}>
          <Header />
          <Navbar />
          <Routes>
          <Route path="/main" element={<Main state = {props.state.mainPage}/>}/>
          <Route path="/account" element={<AccountContainer store = {props.store}/>}/>
          <Route path="/support/*" element={<SupportContainer store = {props.store}/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
  );
}

export default App;
