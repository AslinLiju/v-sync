// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/Map';
import ProfileCard1 from './components/ProfileCard1';
import ProfileCard2 from './components/ProfileCard2';
import ProfileCard3 from './components/ProfileCard3';
import ProfileCard4 from './components/ProfileCard4';
import NewsCardList from './components/NewsCardList'; // Assuming you want this as well

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsCardList />} />  {/* Homepage */}
        <Route path="/map" element={<Map />} />  {/* Map page */}
        <Route path="/ProfileCard1" element={<ProfileCard1 />} />  {/* Profile 1 */}
        <Route path="/ProfileCard2" element={<ProfileCard2 />} />  {/* Profile 2 */}
        <Route path="/ProfileCard3" element={<ProfileCard3 />} />  {/* Profile 3 */}
        <Route path="/ProfileCard4" element={<ProfileCard4 />} />  {/* Profile 4 */}
      </Routes>
    </Router>
  );
};

export default App;
