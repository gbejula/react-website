import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
