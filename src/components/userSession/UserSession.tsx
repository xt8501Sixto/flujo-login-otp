'use client';
import { useSession } from "next-auth/react";

export const UserSession = () => {
  const { data: session } = useSession();

  const isAdmin = session?.user.role === "admin";

  return (
    <div>
      
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>

      <h3 className="text-3xl mb-10">Rol: { session?.user?.role }</h3>

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
};
