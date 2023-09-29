import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/categories/Categories';
import Doctors from './components/doctors/Doctors';

function App() {
  const [categories, setCategories] = useState('Dentist');

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Categories categories={categories} setCategories={setCategories} />} />
          <Route path="/doctors" element={<Doctors categories={categories} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
