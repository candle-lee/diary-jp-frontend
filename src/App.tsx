import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ForgetPasswordPage from './pages/forgetpassword.page';

const HomePage = lazy(() => import('./pages/home.page'));
const SignInPage = lazy(() => import('./pages/signin.page'));
const SignUpPage = lazy(() => import('./pages/signup.page'));

function App() {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
