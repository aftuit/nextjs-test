import { Provider } from "react-redux";
import { store } from "../store/store";
import Navbar from "../components/Navbar";
import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
