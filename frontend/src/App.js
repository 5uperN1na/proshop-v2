import { Container } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
        <p>welcome to proshop</p>
        </Container>
        <Footer />
      </main>

    </>

  )
}

export default App

