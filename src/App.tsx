import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ForgetPasswordPage from './pages/forgetpassword.page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import('./pages/home.page'));
const SignInPage = lazy(() => import('./pages/signin.page'));
const SignUpPage = lazy(() => import('./pages/signup.page'));

function App() {
  const client = new QueryClient();
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <QueryClientProvider client={client}>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          </Routes>
        </QueryClientProvider>
      </Suspense>
    </>
  )
}

export default App
