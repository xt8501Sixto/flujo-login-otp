import { LogoutButton } from "@/components";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="card h-screen p-4">
      <LogoutButton />
      <div className="card-body w-full h-screen p-4">
        <div className="view login-view" style={{ display: "block" }}>
          <div className="h-screen flex">
            
            {children}
           
          </div>
        </div>
      </div>
    </div>
  );
}
