

import { auth } from "@/auth.config";
import { UserSession } from "@/components";
import { redirect } from "next/navigation";


export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }
  return (
    <div>
   <h1>Profile - Usuario Conectado</h1>

    <UserSession />
    </div>
  );
}