import "./index.css";
import "./mdb.dark.min.css";

import Header from "./Header";
import { Content, Jumbotron } from "./posts/Portofolio";
import Footer from "./Footer";

function App() {
  return (
    <main>
      <Header />
      <Jumbotron />
      <Content />
      <Footer />
    </main>
  );
}

export default App;
