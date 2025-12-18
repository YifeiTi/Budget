import React, {createContext, useContext, useState} from "react";


export type Task ={
    id:string;
    title:string;
    points:number;
    completed:boolean;
}
type  TaskContextType = {
    tasks: Task[];
    toggleTask: (id:string) => void;
}
const TasksContext = createContext<TaskContextType | undefined>(undefined);
export function TaskProvider({children}: {children:React.ReactNode}){



    const [tasks, setTasks] = useState<Task[]>([ 
    {id: "1", title: "Go to the Gym", points: 30, completed: false }, 
    { id: "2", title: "Cook a Meal", points: 10, completed: false },
    { id: "3", title: "Finish Project", points: 50, completed: false }, 
    { id: "4", title: "Walk the Dog", points: 10, completed: false }, ]);
    
    const toggleTask = ( id:string) =>{
        const updatedTasks = tasks.map((t: Task) =>{
            if (t.id === id){
                return{
                    ...t,//expands the component t into its individual components
                    completed: !t.completed, //change completed to the opposite of what it was
                };
            }
            return t;
        });
        setTasks(updatedTasks);
    };
    return (
       <TasksContext.Provider value = {{tasks, toggleTask}}>{children}</TasksContext.Provider>
    )
    
}
export function useTask(){
    const context = useContext(TasksContext);

    if(!context){
        throw new Error("useTasks must be used within a TasksProvider");
    }
    return context
}