import { LoginTheme } from '@/container/theme';

export default function LoginPage() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Login with:', data);
    // Here you can add your login logic
  };

  return <LoginTheme onSubmit={handleLogin} />;
}
