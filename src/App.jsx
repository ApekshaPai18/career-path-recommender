import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Recommendations from './components/Recommendations';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path='/' element={<Welcome />} />

       
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
