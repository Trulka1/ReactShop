import style from'./App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';
import Account from './components/Account/Account';
import {Route,Routes} from 'react-router-dom';

function App(props) {
  
  return (
      <div>
        <div className={style.appwrapper}>
          <Header />
          <Navbar />
          <Routes>
          <Route path="/main" element={<Main state = {props.state.mainPage}/>}/>
          <Route path="/account" element={<Account state = {props.state.accountPage} dispatch = {props.dispatch} newInputText = {props.state.accountPage.newInputText}/>}/>
          <Route path="/support/*" element={<Support state = {props.state.supportPage} store = {props.store}/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
  );
}

export default App;
