import { Paper, Switch, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";

function TaskItem(props) {

    const [TaskEnabled, SetTaskEnabled] = React.useState(true);
    const [TaskName, setTaskName] = React.useState(props.data["taskName"]);
    const [TaskInterval, setTaskInterval] = React.useState(props.data["taskInterval"]);
    const [TaskCommand, setTaskCommand] = React.useState(props.data["taskCommand"]);

    const handleTaskEnabled = () => {
        SetTaskEnabled((prev) => !prev);
      };

    
      useEffect(()=>{
        SetTaskEnabled(props.reset);
      }, [props.reset]);

      useEffect(()=>{
        setTaskInterval(props.globalInterval);
      }, [props.globalInterval])

  return (
    <>
      <Paper
        sx={{
          padding: 1,
          border:TaskEnabled ? "1px solid #0000ff": "1px solid #888888",
          background:TaskEnabled?"#ffffff":"#eeeeee"
        }}
        elevation={TaskEnabled ? 3 : 1}
      >
        <Stack direction={"row"} spacing={2}>
            <Switch sx={{
                marginTop:1
            }} size="medium" onChange={handleTaskEnabled} checked={TaskEnabled} ></Switch>
          <TextField
            disabled={true}
            id="outlined-basic"
            size="small"
            label="Task Name"
            variant="standard"
            value={TaskName}
            onChange={(e) => {
                setTaskName(e.target.value);
              }}
          />
          <TextField
            disabled={true}
            id="outlined-basic"
            size="small"
            label="Task Command"
            variant="standard"
            value={TaskCommand}
            onChange={(e) => {
                setTaskCommand(e.target.value);
              }}
          />
          <TextField
          disabled={TaskEnabled ? false:true}
            id="outlined-basic"
            size="small"
            label="Task Interval"
            variant="standard"
            value={TaskInterval}
            onChange={
                (e) => setTaskInterval(e.target.value)
            }
            type="number"
          />
          {/* <TextField
          disabled={TaskEnabled ? false:true}
            id="outlined-basic"
            size="small"
            label="Task File Prefix"
            variant="standard"
          />
          <TextField
          disabled={TaskEnabled ? false:true}
            id="outlined-basic"
            size="small"
            label="Task Category"
            variant="standard"
          /> */}
        </Stack>
      </Paper>
    </>
  );
}

export default TaskItem;
