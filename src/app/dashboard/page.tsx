import { redirect } from "next/navigation";

import { auth } from "@/auth.config";

export default async function DashboardPage() {
  const session = await auth();

  const isAdmin = session?.user.role === "admin";

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div>
      <h1>Dashboard - Usuario Conectado</h1>

      <div>Nombre: {session.user?.name}</div>
      <div>Email: {session.user?.email}</div>
      {<div>Rol: {session.user?.role}</div>}

      <pre>{JSON.stringify(session.user, null, 2)}</pre>

      {isAdmin && (
        <>
          <h4>Opciones como Admin:</h4>
          <ul>
            <li>opcion 1</li>
            <li>opcion 2</li>
            <li>opcion 3</li>
          </ul>
        </>
      )}
    </div>
  );
}
