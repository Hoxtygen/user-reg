import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import { RegistrationForm } from "./pages/RegistrationForm";

function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationForm />
    </div>
  );
}

export default App;
