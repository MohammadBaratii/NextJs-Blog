import { useSession, signOut, getSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="grid justify-items-center gap-2 w-fit m-auto mt-16 p-5 bg-white rounded-xl">
      <img
        src={session.user.image}
        alt="User Avatar"
        className="w-32 h-32 rounded-full"
      />
      <p className="text-xl">{session.user.name}</p>
      <button
        className="flex justify-center items-center gap-1 w-full py-2 bg-rose-400 text-white rounded-md transition hover:bg-rose-500"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="#fff"
          className="w-5 h-5"
        >
          <path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
        </svg>
        Sign Out
      </button>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default UserProfile;
