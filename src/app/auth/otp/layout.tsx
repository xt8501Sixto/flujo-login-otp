import { auth } from "@/auth.config";
import { LogoutButton } from "@/components";
import { redirect } from "next/navigation";

export default async function OneTimePasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }


  return (
    <div className="card h-screen p-0">
      <LogoutButton />
      <div className="card-body w-full h-screen p-0">
        <div className="view login-view" style={{ display: "block" }}>
          <div className="h-screen flex">{children}</div>
        </div>
      </div>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
