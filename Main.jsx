import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/Index.jsx'
import EditarProdutos from './routes/EditarProdutos/Index.jsx'
import Error from './routes/Error/Index.jsx'



const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      // endereço url errado    
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/produtos',
          element: <Produtos/>
        },
        {
          //passar valor para
          path: '/produtos/editar/:id',
          element: <EditarProdutos/>
        },
        {
          // endereco certo porem nao existe mais (nao esta habilitado)
          path: '/antiga',
          element: <Navigate to='/Home'/>
        }
      ] 
    }
  ])