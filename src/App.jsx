import "./App.css";
import Header from "./layout/header/header.jsx";
import Main from "./layout/main/main.jsx";
import Footer from "./layout/footer/footer.jsx";
import Product from "./containers/Product/product.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
