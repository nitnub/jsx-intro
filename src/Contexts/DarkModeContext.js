import { useState, useState } from "react";
import React { createContext} from 'react';

const DarkModeContext = createContext();

function  DarkModeProvider(props) {
  const [darkMode, setDarkMode] =useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return(
    <DarkModeContext.Provider value = {{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeContext, DarkModeProvider }