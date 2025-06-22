import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between bg-slate-800 text-gray-100">
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold mt-10">Next Auth</h1>
        <p className="mt-4 text-lg">
          This is a advanced auth Next.js application.
        </p>

        <div className="mt-10">
          <LoginButton>
            <Button variant="secondary">Sign In</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
