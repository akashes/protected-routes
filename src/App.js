import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Stories from './components/Stories';
import StoryList from './components/StoryList';
import StoryDetails from './StoryDetails';
import Profile from './components/Profile';
import Protected from './components/Protected';
import Login from './components/Login';


function App() {
  return (
    <div className="App  h-screen  ">
      <Header/>
      <main style={{minHeight:'90vh'}} className='grid place-content-center' >
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/stories' element={<Stories/>} >
            <Route index element={<StoryList/>} />
            <Route path=':id' element={<StoryDetails/>} />
            

          </Route>

          <Route path='/profile' element={
            <Protected>
          <Profile/>

            </Protected>
          } />
          <Route path='/login' element={<Login/>} />

        </Routes>


      </main>
      <Footer/>
     
     
    </div>
  );
}

export default App;
