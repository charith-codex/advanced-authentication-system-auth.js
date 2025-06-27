"use client";

import { logout } from "@/actions/auth.actions";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function SettingsPage() {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div>
        <button onClick={onClick}>Sign Out</button>
  
    </div>
  );
}
