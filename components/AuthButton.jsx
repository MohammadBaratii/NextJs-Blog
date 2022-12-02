import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const AuthButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <Link href="/user-profile">
          <img
            src={session.user.image}
            alt="User Avatar"
            className="block w-9 h-9 rounded-full ring ring-white"
          />
        </Link>
      ) : (
        <button
          onClick={() => signIn()}
          className="p-2 px-4 bg-indigo-200 text-neutral-700 rounded-md transition sm:bg-indigo-500 sm:text-white sm:hover:bg-indigo-600"
        >
          Sign In
        </button>
      )}
    </>
  );
};

export default AuthButton;
