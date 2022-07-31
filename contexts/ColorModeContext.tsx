import React, { createContext, useContext, useState } from "react";

interface SearchBarContextProps {
  children: React.ReactNode;
}

interface StatesTypes {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColorModeContextStore = createContext({} as StatesTypes);

const ColorModeContext = ({ children }: SearchBarContextProps) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ColorModeContextStore.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ColorModeContextStore.Provider>
  );
};

export default ColorModeContext;
export const useColorModeContext = () => useContext(ColorModeContextStore);
