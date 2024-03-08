import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import './App.css';
import Navigation from './components/Navigation';
import { ShoppingCartProvider } from './context/ShoppingCardContext';
import Order from './pages/Order';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
        <Navigation />
        <Container className="mb-4">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/store"
              element={<Store />}
            />
            <Route
              path="/order"
              element={<Order />}
            />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
};

export default App;
