'use client'
import { HoverCardDemo } from "@/components/HoverCardDetails";
import { Button } from "./ui/button";
import { axios } from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const TeamCardAssign = ({  users, projectId }: {  projectId:string }) => {
const router = useRouter();

  const addUserTOProject = (e) => {
    e.preventDefault();
   let AllUserId = users?.map(user => user.id);
    axios.patch(`/api/v1/add-team/${projectId}`, {users: AllUserId})
    .then(res => {
      console.log(res)
      toast.success(res.data.data)
      router.push(`/projects/${projectId}`)
    })
    .catch(error => console.log(error))
  };

  return (
    <form className="flex flex-col mt-5 " onSubmit={addUserTOProject}>
      <div className="flex flex-col overflow-hidden overflow-y-auto ">
        {users?.map((user, i) => (
          <HoverCardDemo name={user?.name} role={user?.stack} key={i} />
        ))}
      </div>
      <Button disabled={users?.length === 0} type="submit">
        Add team member
      </Button>
    </form>
  );
};

export default TeamCardAssign;
