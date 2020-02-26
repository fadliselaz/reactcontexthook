import React, { Component } from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleButton from './components/ToggleButton';
import AuthContextProvider from './contexts/AuthContext';
import Loged from './components/Loged';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          {/* jadi navbar dan booklist sekarang bisa consume 
        state dari ThemsContext dan AuthContextProvider*/}
          <Navbar />
          <BookList />
          <ToggleButton />
          {/* <Loged /> */}

        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
