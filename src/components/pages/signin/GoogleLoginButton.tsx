import React from "react";
import { GoogleLogin } from "react-google-login";

interface GoogleLoginButtonProps {
  onSuccess: (googleData: any) => void;
  onFailure: (error: any) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  onSuccess,
  onFailure,
}) => {
  const clientId =
    "276543592210-9u0egpv7hhdq8s4cbqtp38apf3ujkbv5.apps.googleusercontent.com";
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      className="flex items-center justify-center w-full h-[3.125rem] flex-shrink-0 rounded-2xl bg-[#F4F7FE] border-0 p-0 shadow-none"
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
