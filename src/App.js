import { Route, BrowserRouter as Router } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Route exact path='/'>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>

          <Route path='/about' component={AboutPage} />

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
