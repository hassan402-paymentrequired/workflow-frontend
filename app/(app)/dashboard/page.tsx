"use client";
import React from "react";
import Card from "@/components/Card";
import {Chart} from "@/components/Chart";
import ProjectCard from "@/components/ProjectCard";
import { useAuth } from '@/hooks/auth'


const Dashboard = () => {
  const {user} = useAuth({middleware: "auth"});

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card
          innercolor="bg-yellow-500"
          count={3049}
          color="bg-yellow-200"
          title="Active"
        />
        <Card
          innercolor="bg-blue-500"
          count={3049}
          color="bg-blue-200"
          title="Pending"
        />
        <Card
          innercolor="bg-green-500"
          count={3049}
          color="bg-green-200"
          title="Accepted"
        />
      </div>

      <div className="grid  gap-4 md:grid-cols-3 min-h-[100vh] flex-1 rounded-xl  md:min-h-min ">
        <div className="min-h-[100vh] col-span-2 flex-1 rounded-xl bg-stone-100/50 md:min-h-min dark:bg-stone-800/50">
          <Chart />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-stone-100/50 md:min-h-min dark:bg-stone-800/50">
        <div className="w-full px-5 py-3">
        <h2 className="text-lg sm:text-xl font-semibold">All projects</h2>
        </div>

        <div className="w-full px-4 py-3">
          <ProjectCard />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
