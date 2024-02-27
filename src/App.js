import Navbar from "./components/Navbar";
import Container from "./components/Containers/container"
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="site-wrapper">
      <Navbar />
      <Container />
      <ProductPage />
      <Footer />;
    </div>
  );
};

export default App;
 