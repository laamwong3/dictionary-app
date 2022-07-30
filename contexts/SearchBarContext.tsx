import React, { createContext, useContext, useState } from "react";

interface SearchBarContextProps {
  children: React.ReactNode;
}

interface StatesTypes {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarContextStore = createContext({} as StatesTypes);

const SearchBarContext = ({ children }: SearchBarContextProps) => {
  const [keyword, setKeyword] = useState("");

  return (
    <SearchBarContextStore.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchBarContextStore.Provider>
  );
};

export default SearchBarContext;
export const useSearchBarContext = () => useContext(SearchBarContextStore);
