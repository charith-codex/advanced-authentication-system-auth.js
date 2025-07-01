import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth-session";

export default async function ServerPage() {
  const user = await currentUser();
  return <UserInfo label="💻 Server components" user={user} />;
}
