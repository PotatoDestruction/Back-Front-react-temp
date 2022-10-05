import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout';

function App() {

  const routes = [
    {
      path: '/',
      element: <Layout pages={['login', 'register']} ><Home /></Layout>
    },
    {
      path: '/home',
      element: <Layout pages={['login', 'register']} ><Home /></Layout>
    },
    {
      path: '/Home',
      element: <Layout pages={['login', 'register']} ><Home /></Layout>
    }
  ]
  return (
    <Routes>
    {routes.map((route, num) => {
      return (
        <Route key={num} path={route.path} element={route.element} />
      )
    })}
  </Routes>
  );
}

export default App;
