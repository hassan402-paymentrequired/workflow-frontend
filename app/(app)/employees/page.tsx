"use client";
import EmployeeCard from "@/components/EmployeeCard";
import { axios } from "@/lib/axios";
import { useState, useEffect } from "react";

type users = {
  user: {
    name: string;
    email: string;
    role: string;
  };
};
const Employees = () => {
  const [users, setUsers] = useState<users[]>([]);

  useEffect(() => {
    axios
      .get("/api/v1/employees")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="w-full p-10">
      <h2 className="text-3xl font-bold uppercase">Employees</h2>

      <div className="w-full gap-8 py-5 grid-cols-1 px-8 md:grid-cols-2 grid lg:grid-cols-3 ">
        {users?.map((user, i) => (
          <EmployeeCard user={user} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Employees;
