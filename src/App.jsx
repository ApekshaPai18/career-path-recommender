import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Recommendations from './components/Recommendations';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        {/* Only Welcome on root route */}
        <Route path='/' element={<Welcome />} />

        {/* Grouped layout for Form and Recommendation pages */}
        <Route
          path='/form'
          element={
           
              
              <Form />
            
          }
        />
        <Route
          path='/recommendations'
          element={
              <Recommendations />
          
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
