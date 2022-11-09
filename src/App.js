import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './context/AuthContextProvider';
import AppRouter from './router/AppRouter';
import BlogContextProvider from './context/BlogContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>




    </div>
  );
}

export default App;
