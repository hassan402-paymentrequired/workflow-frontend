"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "./DatePicker";
import { axios } from "@/lib/axios";
import { formatDateToSqlDialet } from "@/lib/utils";
import toast from "react-hot-toast";
// import { useUserProvider } from "@/lib/UserContext";

export const AddTask = ({ users, project_id }) => {
  const [selectedAssignee, setSelectedAssignee] = useState<string>('');
  const [date, setDate] =  useState<Date>()
  const [taskName, setTaskName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [priority, setPriority] = useState<string>('');


  const AllusersOnTheProject = users?.map((user) => ({
    name: user.name,
    id: user.id,
  }));

  const addTaskToUser = (e) => {
    e.preventDefault();
    const formattedDate = formatDateToSqlDialet(date);
    axios.post('/api/v1/tasks',
      {
        user: selectedAssignee,
        duration: formattedDate,
        title: taskName,
        description: desc,
        priority: priority,
        project_id: project_id
      }
    ).then(res => {
      toast.success(res.data.data)
    }).catch(error => console.log(error))

  }

  return (
    <Sheet>
      <SheetTrigger className="px-4 py-1 bg-black/100 text-white rounded-md">
        Add Task
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Add and assign task to team?</SheetTitle>
          <SheetDescription>
            Detailed information on what needs to be done, including context and
            purpose. This helps the assignee understand the goal and importance
            of the task.
          </SheetDescription>
        </SheetHeader>

        <div className="w-full flex flex-col mt-10">
          <form className="w-full flex space-y-4 flex-col mb-4" onSubmit={addTaskToUser}>
            <Input type="text" placeholder="eg. Task name" value={taskName} onChange={(e) => setTaskName(e.target.value)}  />
            <textarea
              rows={4}
              value={desc} onChange={(e) => setDesc(e.target.value)}
              className="border text-sm  rounded-md p-2 resize-none shadow-sm text-gray-600 placeholder:text-sm"
              placeholder="eg. Task description"
            ></textarea>

            <select className="border shadow-sm p-2 rounded-md" onChange={(e) => setSelectedAssignee(e.target.value)}>
              <option defaultValue value={"jdj"}>
                e.g . Task assignee
              </option>
              {AllusersOnTheProject?.map((user, i) => (
                <option key={i + user} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <DatePicker date={date} setDate={setDate} />
            <select className="border shadow-sm p-2 rounded-md" onChange={(e) => setPriority(e.target.value)}>
              <option>Priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <Button type="submit">Add task</Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
