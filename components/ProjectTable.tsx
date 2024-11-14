import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import {Button} from '@/components/ui/button'
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

type props = {
  data: any[]
}

const ProjectTable = ({data}: props) => {
  return (
    <Table className="bg-gray-300 rounded-md">
      <TableCaption>A list of your all project.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Project name</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead>complaint</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          { data.map((item, index) => (
        <TableRow key={index}>

            <TableCell className="font-medium uppercase">{item.name}</TableCell>
            <TableCell>{item.stage}</TableCell>
            <TableCell>20</TableCell>
            <TableCell>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            //   onClick={() => navigator.clipboard.writeText(payment.id)}
            >
             View project
            </DropdownMenuItem>
            <Link href={`/projects/${item.id}`}>
            <DropdownMenuItem>View Project details</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
      </TableBody>
    </Table>
  );
};

export default ProjectTable;
