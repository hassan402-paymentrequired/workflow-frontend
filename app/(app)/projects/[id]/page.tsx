"use client";
import Box from "@/components/Box";
import { axios } from "@/lib/axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PercentDiamond, Handshake, PencilRuler } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectTeamCard from "@/components/ProjectTeamCard";
import WorkloadIndicator from "@/components/WorkloadIndicator";
import { AddTask } from "@/components/AddTaskModal";

type Props = {
  param: {
    id: string;
  };
};

const SingleProject = (prop: Props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/v1/project/${id}`)
      .then((res) => setData(res.data.project))
      .catch((error) => console.log(error));
  }, [id]); 

  console.log(data)
  return (
    <div className="w-full p-10 bg-gray-100">
      <div className="flex w-full flex-col p-2 bg-white rounded-md">
        <div className="border-b">
          <h2 className="text-xl sm:text-4xl font-bold uppercase">
            {data.name}
          </h2>
          <p>{data.description}</p>
          <div className="justify-end flex">
            <Link href={`/add-team/${data.id}`} className="px-3 py-1 rounded bg-black text-white my-1">Add team member</Link>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex py-3">
            <Box
              value={data?.stage}
              text="Status"
              color="bg-green-500"
              icon={<PercentDiamond size={10} />}
            />
            <Box
              value={data?.asignee}
              text="Assign to"
              color="bg-yello-500"
              icon={<Handshake size={10} />}
            />
            <Box
              value={data.users?.length}
              text="Team"
              color="bg-blue-500"
              icon={<PencilRuler size={10} />}
            />
          </div>

          <div className="nam">
            <AddTask users={data?.users} project_id={data.id}/>
          </div>
        </div>
      </div>

      <div className="p-5 w-full">
        <h1 className="text-xl sm:text-2xl ">Team Workload</h1>

        <div className="w-full flex flex-wrap  flex-col gap-4 sm:flex-row">
          {/* workload indicator */}
              <WorkloadIndicator users={data?.users}/>

          {data.users?.length > 0 ? (
            <div className="w-full space-y-4">
              {data.users.map((user, index) => (
                <ProjectTeamCard key={index} user={user} />
              ))}
            </div>
          ) : (
            <div className="w-full gap-3 flex-col flex items-center justify-center">
              <p className="text-xl sm:text-4xl font-bold">No team members</p>
              <Link
                href={`/add-team/${data.id}`}
                className="px-4 py-2 bg-black text-white rounded-sm"
              >
                Add Team
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
