import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/home.page'));
const SignInPage = lazy(() => import('./pages/signin.page'));

function App() {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}></Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  )
}

export default App
