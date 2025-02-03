import React from "react";

const Exercise8 = () => {
  type Role = "admin" | "editor" | "viewer" | "guest" | "unknown";
  const getAction = (role: Role): string => {
    switch (role) {
      case "admin":
        return "Manage users and settings";
        break;
      case "editor":
        return "Edit content";
        break;
      case "viewer":
        return "View content";
        break;
      case "guest":
        return "Limited access";
        break;
      case "unknown":
        return "Invalid role";
        break;
      default:
        return `We are out of ${role}`;
    }
  };

  const roleAdmin = getAction("admin");
  const roleGuest = getAction("guest");

  return (
    <div>
      <h1>
        Admin: {roleAdmin}
      </h1>
      <h1>Guest: {roleGuest}</h1>
    </div>
  );
};
export default Exercise8;
