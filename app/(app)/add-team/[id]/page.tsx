"use client";
import { axios } from "@/lib/axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TeamCardAssign from "@/components/TeamCardAssign";
import {User2Icon} from 'lucide-react'
import { Input } from "@/components/ui/input"
import ProfileCheck from "@/components/ProfileCheck";
import { useUserProvider} from '@/lib/UserContext'


type Props = {
  id: {
    id: string;
  };
};

const AddTeam = (props: Props) => {
  const {backendEngineers,  qualityAssurance,projectManagers, frontend, ux, search, setSearch, users, setUsers, selectedBackend } = useUserProvider()
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/v1/project/${id}`)
      .then((res) => {
        setUsers(res.data)
      })
      .catch((error) => console.log(error));

  }, [id]);

console.log(backendEngineers)

  return (
    <div className="p-5 w-full h-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full  border w-full"
      >
        <ResizablePanel defaultSize={50}>
          <div className="h-full p-6">
            <div className="flex flex-col border-b py-3">
              <span className="font-semibold">
                <span className="text-2xl font-bold uppercase">&quot;{users.project?.name}&quot;</span>{" "}
                Workflow
              </span>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <small className="text-sm font-semibold">Stage:</small>
                  <small>{users.project?.stage}</small>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <TeamCardAssign users={selectedBackend} projectId={users.project?.id} />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className=" h-full p-6">
            <div className="w-full flex items-center justify-between ">
            <span className="font-semibold">Team filter</span>
            <span><User2Icon/></span>
            </div>
            <p>All available team filter</p>
            <Input
            value={search}
            placeholder="seach..."
            onChange={(e) => setSearch(e.target.value)}
            />
            <hr className="text-gray-700 mt-3"/>

            <div className="flex flex-col">
              {/* {data.users?.map((user, index) => ( */}
                <ProfileCheck data={backendEngineers} team="Backend Engineers"/>
                <ProfileCheck data={qualityAssurance} team="Quality Assurance"/>
                <ProfileCheck data={projectManagers} team="Project Managers"/>
                <ProfileCheck data={ux} team="UI/UX"/>
                <ProfileCheck data={frontend} team="Frontend"/>
              {/* ))} */}
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default AddTeam;
