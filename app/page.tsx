"use client";
import { createClient } from "@/lib/supabase/client";

export default function LandingPage() {
  const supabase = createClient();

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/hub` },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">BizFlow</h1>
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
