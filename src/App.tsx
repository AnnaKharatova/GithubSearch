import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { Navigation } from './components/Navigation.tsx';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
  </>
  );
}

export default App;
