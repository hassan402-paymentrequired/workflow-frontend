export type Project = {
    id: string | number,
    name: string,
    description: string,
    start_date: Date | string,
    end_date: Date | string,
    status: string,
    users: User[],
    logo: string,
    project_id: string,
    stage: string,
    asignee: string
}

export type User = {
    id: string | number,
    name: string,
    email: string,
    tasks: Task[]
}

export type Task = {
    id: string | number,
    title: string,
    description: string,
    status: string,
    // user_id: string | number,
    // project_id: string | number,
    priority: string,
    hours: string,
    duration: string,
    completed: number
    
}