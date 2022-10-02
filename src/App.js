import { Paper } from "@mui/material";
import TaskComponent from "./TaskComponent";


const tasks = [{"taskName":"task 1","taskInterval":0, "taskCommand":"command_1" },
 {"taskName":"task 2","taskInterval":5 ,"taskCommand":"command_2" }];


 const tasks2 = [{"taskName":"task 1","taskInterval":0, "taskCommand":"command_1" },
 {"taskName":"task 2","taskInterval":5 ,"taskCommand":"command_2" },
 {"taskName":"task 2","taskInterval":5 ,"taskCommand":"command_2" },
 {"taskName":"task 2","taskInterval":5 ,"taskCommand":"command_2" }];

function App() {
  return (
    <>
    <TaskComponent name="CPU Related Tasks" tasksArray={tasks}></TaskComponent>
    <TaskComponent name="MEMORY Related Tasks" tasksArray={tasks2} ></TaskComponent>
    <TaskComponent name="CPU Related Tasks" tasksArray={tasks}></TaskComponent>
    <TaskComponent name="MEMORY Related Tasks" tasksArray={tasks2} ></TaskComponent>
    <TaskComponent name="CPU Related Tasks" tasksArray={tasks}></TaskComponent>
    <TaskComponent name="MEMORY Related Tasks" tasksArray={tasks2} ></TaskComponent>
    </>
    
  );
}

export default App;
