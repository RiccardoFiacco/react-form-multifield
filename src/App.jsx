import { Header } from "./components/header/Header";
import Main from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import style from "./App.module.css";
function App() {
  return (
    <div className={[`d-flex flex-column ${style.vh100}`]}>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
