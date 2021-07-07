import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';

import NavBar from './components/NavBar';


import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <NavBar /> 
    <div className="max-w-screen-md mx-auto pt-20">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/article-list" component={ArticlesList} />
      <Route exact path="/article/:name" component={Article} />

     </div>
    </Router>

  );
}


export default App;
