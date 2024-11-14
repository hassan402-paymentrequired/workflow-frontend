'use client'
import { useEffect} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WorkDoneChart } from "@/components/WorkDoneChart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tasks = [
  {
    status: "In Progress",
    tasks: [
      { id: 1, title: "Task 1", description: "Work on feature A" },
      { id: 2, title: "Task 2", description: "Fix bug B" },
    ],
  },
  {
    status: "Ready",
    tasks: [
      { id: 3, title: "Task 3", description: "Review pull request" },
      { id: 4, title: "Task 4", description: "Prepare deployment plan" },
    ],
  },
  {
    status: "Done",
    tasks: [
      { id: 5, title: "Task 5", description: "Complete documentation" },
      { id: 6, title: "Task 6", description: "Merge feature branch" },
    ],
  },
];


type User = {
  user: {
    id: string
    name: string,
    email: string,
    role: string,
    tasks: Task[],
      
    }
  }

  type Task = {
 
      id: number,
      title: string,
      description: string,
      status: string
      
  }

  type Memo = {
      status: string,
      tasks: Task[]
  }[]



const ProjectTeamCard = ({ user }: User) => {

  const memo: Memo = [
    {
      status: "In Progress",
      tasks : [],
    },
    {
      status: "ready",
      tasks: [],
    },
    {
      status: "done",
      tasks: [],
    },
  ];
  // useEffect(() => {
    
    user.tasks?.forEach((task: Task) => {
      if (task.status.toLowerCase() === 'in_progress') {
        memo[0].tasks.push(task); 
      }
      if (task.status.toLowerCase() === 'ready') {
        memo[1].tasks.push(task); 
      }
      if (task.status.toLowerCase() === 'review') {
        memo[2].tasks.push(task); 
      }
    });
    
  
  // }, [user])

  





  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2">
          <div className="flex py-2 bg-gray-300/25 uppercase items-center justify-center w-10 h-10 rounded-full">
            {user?.name?.substring(0, 2)}
          </div>
          {user?.name}
        </CardTitle>
        <CardDescription>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col  items-center justify-center">
              <span className="text-gray-900 text-xs ">23</span>
              <span className="text-gray-500 text-xs ">Not done</span>
            </div>

            <div className="flex flex-col  items-center justify-center">
              <span className="text-gray-900 text-xs ">3</span>
              <span className="text-gray-500 text-xs ">Done</span>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
      <Accordion type="single" collapsible>
      {memo.map((group, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{group.status}</AccordionTrigger>
          <AccordionContent className="text-wrap">
            <ul>
              {group?.tasks?.length > 0 ? (
                group?.tasks?.map((task: Task) => (
                  <li key={task.id}>
                    <strong>{task.title}:</strong> {task.description}
                  </li>
                ))
              ) : (
              <p>N0 task assigne to {user.name} </p>
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
      </CardContent>
      <CardFooter>
        <p>{user.tasks.length} Tasks with estimate</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectTeamCard;
