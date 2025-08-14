import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/feature/Footer/Footer';
import StickyWhatsappButton from './components/feature/StickyWhatsappButton/StickyWhatsappButton';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { DataProvider } from './context/DataContext';

const Layout = () => (
  <>
    <Outlet />
    <StickyWhatsappButton />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'catalog', element: <CatalogPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  );
}

export default App;
