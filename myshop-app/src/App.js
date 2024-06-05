import React from "react";
import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header";
import AppRouter from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
