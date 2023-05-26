import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/nav-menu/NavMenu';
import Publications from './pages/publications/Publications';
import AddPublications from './pages/add-publications/AddPublications';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path='publications' element={<Publications />} />
        <Route path='add-publications' element={<AddPublications />} />
      </Routes>
    </div>
  );
}

export default App;
