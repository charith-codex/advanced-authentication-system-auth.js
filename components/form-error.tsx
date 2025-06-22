import { TriangleAlertIcon } from "lucide-react";
import React from "react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 flex items-center gap-x-2 text-sm text-destructive rounded-md px-4 py-3">
      <TriangleAlertIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
