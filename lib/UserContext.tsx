"use client";
import { useContext, useState, createContext, useMemo } from "react";

const UserContext = createContext([]);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBackend, setSelectedBackend] = useState([]);

  const backendEngineers = useMemo(
    () =>
      users.users?.filter(
        (user) => user?.role?.name.toLowerCase() === "backend developer"
      ),
    [users.users]
  );
  const mobile = useMemo(
    () =>
      users.users?.filter(
        (user) => user?.role?.name.toLowerCase() === "mobile developer"
      ),
    [users.users]
  );
  const fullstack = useMemo(
    () =>
      users.users?.filter(
        (user) => user?.role?.name.toLowerCase() === "full stack developer"
      ),
    [users.users]
  );
  const qualityAssurance = useMemo(
    () =>
      users.users?.filter(
        (user) => user?.role?.name.toLowerCase() === "quality assurance engineer"
      ),
    [users.users]
  );
  const projectManagers = useMemo(
    () =>
      users.users?.filter(
        (user) => user?.role?.name.toLowerCase() === "project manager"
      ),
    [users.users]
  );
  const frontend = useMemo(
    () =>
      users.users?.filter(
        (user) => user?.role?.name.toLowerCase() === "frontend developer"
      ),
    [users.users]
  );
  const ux = useMemo(
    () =>
      users.users?.filter(
        (user) => user?.role?.name.toLowerCase() === "ux/ui designer"
      ),
    [users.users]
  );

  const selectBackend = (name: string, stack: string, id: number) => {
    setSelectedBackend((prev) => {
      const alreadySelected = prev.some((user) => user.id === id);
      if (alreadySelected) {
        return prev.filter((user) => user.id !== id);
      } else {
        return [...prev, { name, stack, id }];
      }
    });
  };

  // backendEngineers.filter(user => parseInt(user.id) !== parseInt(id));

  return (
    <UserContext.Provider
      value={{
        users,
        backendEngineers,
        mobile,
        setUsers,
        fullstack,
        qualityAssurance,
        projectManagers,
        frontend,
        ux,
        search,
        setSearch,
        selectBackend,
        selectedBackend,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserProvider = () => useContext(UserContext);
