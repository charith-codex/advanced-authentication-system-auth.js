import { auth, signOut } from "@/auth";

export default async function page() {
  const session = await auth();

  // session?.user.id
  return (
    <div>
      settings protected
      <pre>
        {JSON.stringify(session, null, 2)}
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/auth/login" });
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      </pre>
    </div>
  );
}
