import { Routes, Route, Outlet } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/Auth/LoginPage';

const AppLayout = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const AuthenticationLayout = () => (
  <AuthLayout>
    <Outlet />
  </AuthLayout>
);

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/auth" element={<AuthenticationLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
