import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // This ensures that the component only runs client-side, after mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the component hasn't mounted, we do not try to use the router or localStorage yet
  if (!isMounted) {
    return null; // Or you can return a loading spinner or placeholder
  }

  useEffect(() => {
    // Only access localStorage and useRouter on the client side
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [router]);

  return <>{children}</>;
}
