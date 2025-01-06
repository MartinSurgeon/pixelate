import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth0 } from "@auth0/auth0-react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithRedirect } = useAuth0();

  const handleGoogleSignIn = () => {
    loginWithRedirect({
      connection: "google-oauth2",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-[440px] space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <img src="/lovable-uploads/337f04f9-16c7-48ea-bc14-99253a01796a.png" alt="Logo" className="h-8" />
            <span className="text-xs px-3 py-1 bg-black text-white rounded-full">Get Ready To Get DAM!</span>
          </div>
          <h1 className="text-2xl font-semibold">Sign In Your Account</h1>
          <p className="text-sm text-muted-foreground">Fill your account details to login</p>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-4">
            <Button className="w-1/2 bg-primary">Sign In</Button>
            <Button variant="outline" className="w-1/2" onClick={() => window.location.href = "/auth/signup"}>
              Sign Up
            </Button>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10"
              />
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-10 pr-10"
              />
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <Button className="w-full bg-[#0066FF] hover:bg-[#0052CC]">
            Sign In
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or With
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignIn}
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="mr-2 h-4 w-4"
            />
            Google Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;