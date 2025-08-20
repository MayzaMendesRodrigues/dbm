import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/feature/Footer/Footer';
import StickyWhatsappButton from './components/feature/StickyWhatsappButton/StickyWhatsappButton';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { DataProvider } from './context/DataContext';
import SellMyBikePage from './pages/SellMyBike/SellMyBikePage';
import { Pages } from './constants/constants';
import NavBar from './components/ui/NavBar/NavBar'
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './themes/theme'

const Layout = () => (
  <>
    <Outlet />
    <NavBar />
    <StickyWhatsappButton />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, path: Pages.Home.url, element: <HomePage /> },
      { path: Pages.Catalog.url, element: <CatalogPage /> },
      { path: Pages.SellMyBike.url, element: <SellMyBikePage /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
