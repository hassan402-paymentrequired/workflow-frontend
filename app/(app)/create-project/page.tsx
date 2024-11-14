"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PhoneOutgoingIcon, PackagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import DateRangePicker from "@/components/DateRangePicker";
import { axios } from "@/lib/axios";
import { addDays, format } from "date-fns";
import { DrawerDemo } from "@/components/Drawers";
import toast from "react-hot-toast";
// import  MultiSelect from "@/components/team-switcher";

const CreateProject = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [asignee, setAssignee] = useState("");
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState("");
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 24),
  });

  const handleFileChange = (e: ChangeEvent) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const createUrl = (img) => {
    return URL.createObjectURL(img);
  };

  const createProject = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ date, name, category, description, image, asignee });
    const formattedFromDate = format(date.from, "yyyy-MM-dd HH:mm:ss");
    const formattedToDate = format(date.to, "yyyy-MM-dd HH:mm:ss");
    await axios
      .post(
        "/api/v1/project-create",
        {
          name,
          description,
          logo: image,
          end_date: formattedToDate,
          start_date: formattedFromDate,
          asignee: asignee,
          category,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setOpen(true);
        setProject(response.data.data.id);
      })
      .catch((error) => {
        console.log(error.response.data);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="p-10">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 w-full max-w-2xl m-auto">
          <span className="mb-4">
            <PackagePlus size={80} />
          </span>
          <h2 className="text-base/7 md:text-3xl font-semibold text-gray-900">
            Create Project
          </h2>
          <form
            onSubmit={createProject}
            className="mt-10  m-auto grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div className="col-span-full">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Project name
              </label>
              <div className="mt-2 col-span-full">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 outline-none focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    Gist:
                  </span>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="ile doola"
                    className="block w-full flex-1 border-0 outline-none bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Description (optional)
              </label>
              <div className="mt-2">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="block w-full px-2 border-0 py-1.5 text-gray-900  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 outline-none focus-within:ring-2 placeholder:text-gray-400  resize-none sm:text-sm/6"
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">
                Write a few sentences about the project if neccessary.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block mb-2 text-sm/6 font-medium text-gray-900"
              >
                Estimated Date (optional)
              </label>
              <DateRangePicker
                className="w-full"
                setDate={setDate}
                date={date}
              />
            </div>

            <div className="col-span-full">
              <Label htmlFor="me">Category (web, api, etc)</Label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="web, api..."
                className="block w-full border flex-1 rounded outline-none bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                required
              />
            </div>

            <div className="col-span-full">
              <Label htmlFor="me">Assignee</Label>
              <input
                value={asignee}
                onChange={(e) => setAssignee(e.target.value)}
                type="text"
                required
                placeholder="john doe."
                className="block w-full border flex-1 rounded outline-none bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Logo/Image (optional)
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                {image ? (
                  <div
                    className="flex w-full h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${createUrl(image)})` }}
                  ></div>
                ) : (
                  <div className="text-center">
                    <PhoneOutgoingIcon
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          onChange={handleFileChange}
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Button type="submit">Create</Button>
          </form>
          <DrawerDemo click={open} projectId={project} />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
