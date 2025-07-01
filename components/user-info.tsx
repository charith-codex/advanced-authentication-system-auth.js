import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] max-w-[90%] mx-4 shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium mb-2 sm:mb-0">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono px-2 py-1 bg-slate-100 rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium mb-2 sm:mb-0">Name</p>
          <p className="truncate text-xs max-w-[180px] font-mono px-2 py-1 bg-slate-100 rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium mb-2 sm:mb-0">Email</p>
          <p className="truncate text-xs max-w-[180px] font-mono px-2 py-1 bg-slate-100 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium mb-2 sm:mb-0">Role</p>
          <p className="truncate text-xs max-w-[180px] font-mono px-2 py-1 bg-slate-100 rounded-md">
            {user?.role}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
