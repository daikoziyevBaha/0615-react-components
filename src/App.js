import { useState } from "react";
import { DefaultContext } from "./Context";
import { ThemeContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState('dark');

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const handleChangeTheme = () => {
    setTheme(theme === 'light'?"dark":'light')
}

  return (
    <ThemeContext.Provider value={{theme, handleChangeTheme}}>
      <DefaultContext.Provider value={{ handleCreateFan }}>
        <Header fan={fan} />
        <hr />
        <Content />
        <Footer />
      </DefaultContext.Provider>
    </ThemeContext.Provider>
  );
}
