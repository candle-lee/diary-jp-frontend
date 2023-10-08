import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ForgetPasswordPage from './pages/forgetpassword.page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { CircleSpinner } from './components/common/CircleSpinner';
import ResetPasswordPage from './pages/resetpassword.page';
import MainPage from './pages/main.page';
import PasscodePage from './pages/passcode.page';

const HomePage = lazy(() => import('./pages/home.page'));
const SignInPage = lazy(() => import('./pages/signin.page'));
const SignUpPage = lazy(() => import('./pages/signup.page'));

function App() {
  const client = new QueryClient();
  return (
    <>
      <Suspense fallback={<CircleSpinner />}>
        <QueryClientProvider client={client}>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signin-validation" element={<PasscodePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Routes>
        </QueryClientProvider>
      </Suspense>
    </>
  )
}

export default App
