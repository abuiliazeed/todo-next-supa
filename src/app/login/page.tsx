import Navbar from '../../components/Navbar';
import LoginForm from '../../components/LoginForm';

export default function Login() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <LoginForm />
      </main>
    </div>
  );
}
