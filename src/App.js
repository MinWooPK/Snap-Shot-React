import React from "react";
import "./App.css";
import Button from "./components/Buttons";
import Imagenes from "./components/Imagenes";
import Input from "./components/Input";
import Title from "./components/Title";
import Search from "./components/Search";
import AppContext from "./components/Context";

export default function App() {
  return (
    <AppContext>
      <div className="mother-container">
        <Title />
        <Input />
        <Button />
        <Search />
        <div className="imagenes">
          <Imagenes />
        </div>
      </div>
    </AppContext>
  );
}
