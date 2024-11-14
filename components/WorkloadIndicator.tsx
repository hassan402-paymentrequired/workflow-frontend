import React from "react";
import { Progress } from "@/components/ui/progress";

const WorkloadIndicator = ({ users }) => {
  return (
    <div className="flex w-full flex-col sm:flex-row  space-x-2">
      {users?.map((user, index) => (
        <div key={index} className="items-center w-full p-2 border">
          <div className=" ">
            <Progress  value={Math.min(user.tasks.length, 100)}  className="w-[100%] bg-green-500" />
          </div>
          <div className="flex  space-x-2 mt-3 items-center">
            <div className="flex bg-gray-300/25 uppercase items-center justify-center w-7 h-7 rounded-full">
              <small>{user?.name?.substring(0, 2)}</small>
            </div>
            <span className="text-xs ">{user?.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkloadIndicator;
