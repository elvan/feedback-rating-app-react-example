import { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';

import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className='container'>
        <Route exact path='/'>
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </Route>

        <Route path='/about' component={AboutPage} />

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
