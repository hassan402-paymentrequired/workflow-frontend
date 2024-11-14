import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

import { useUserProvider } from "@/lib/UserContext";

const ProfileCheck = ({ name, data, team }: { name?: string, data: any, team: string }) => {
  const { backendEngineers, selectBackend } = useUserProvider();


  return (
    <div className=" py-2 border-b">
        <h2 className="text-2xl  font-bold">{team}</h2>
        <div className="flex flex-col space-y-2">
        {data?.map(user => (
            <div key={user?.id} className="relative w-full justify-between px-3 py-1 my-2 md:my-3 flex items-center border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
            <div className=" flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center uppercase bg-red-400">
                {user?.name.substring(0, 2)}
              </div>
              <p className="font-display mb-2 text-base font-semibold dark:text-gray-200">
                {user?.name}
              </p>
            </div>
            <div className="flex">
            <input type="checkbox" onChange={() => selectBackend(user?.name, user?.role?.name, user?.id)} />
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default ProfileCheck;
