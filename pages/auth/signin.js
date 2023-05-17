import { db } from "../../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { googleAuth } from "../../services/authBlog";
import { useToast } from "@chakra-ui/react";
export default function Signin() {

  const router = useRouter();
  const toast = useToast()
  let response
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const user = auth.currentUser.providerData[0];
    
        response = await googleAuth({firstname:user.displayName.split("")[0], lastname: user.displayName.split("")[1], email:user.email, username:user.email});
        if (response) {
            localStorage.setItem("token", response?.data.access_token);
            toast({
                title: response?.data.msg,
                position: "bottom",
                status: "success",
                isClosable: true,
            });
            router.push("/");
          } 
      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
        alt="twitter image inside a phone"
        className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex"
      />
      <div className="">
        <div className="flex flex-col items-center">
          <img
            className="w-36 object-cover"
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
            alt="twitter logo"
          />
          <p className="text-center text-sm italic my-10">
            This app is created for learning purposes
          </p>
          <button
            onClick={onGoogleClick}
            className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => {
              router.push("/auth/email");
            }}
            className="bg-blue-400 mt-3 rounded-lg p-3 text-white hover:bg-blue-500"
          >
            Sign in with Email
          </button>
        </div>
      </div>
    </div>
  );
}
