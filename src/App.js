import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';

import Container from '@mui/material/Container';

import { StartForm } from './pages/StartForm';
import { ListForm } from './pages/ListForm';
import { Results } from './pages/Results';

function App() {
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: 50 }}>
      <Router>
        <Routes>
          <Route path="/" element={<StartForm />} />
          <Route path="/list" element={<ListForm />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
