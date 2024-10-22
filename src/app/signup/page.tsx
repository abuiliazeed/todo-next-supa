import Navbar from '../../components/Navbar';
import SignupForm from '../../components/SignupForm';

export default function Signup() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
        <SignupForm />
      </main>
    </div>
  );
}
