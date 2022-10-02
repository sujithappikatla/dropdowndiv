import {
  Box,
  Grid,
  FormControlLabel,
  Switch,
  Collapse,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import KeyboardDoubleArrowUpSharpIcon from "@mui/icons-material/KeyboardDoubleArrowUpSharp";
import TaskItem from "./TaskItem";

function TaskComponent(props) {
  const [Enabled, setEnabled] = React.useState(false);
  const [Arrow, setArrow] = React.useState(false);
  const [GlobalInterval, setGlobalInterval]= React.useState(0);

  const handleEnabled = () => {
    setEnabled((prev) => !prev);
    setArrow(false);
  };

  const handleArrow = () => {
    setArrow((prev) => !prev);
  };

  return (
    <Paper sx={{
        margin:3,
        padding:3,

    }} elevation={Enabled ? 2 :1}>
    
      <Stack spacing={2}>
        <Box>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Stack direction={"row"} spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      size="medium"
                      checked={Enabled}
                      onChange={handleEnabled}
                      color={"secondary"}
                    />
                  }
                  label={props.name}
                />
                <TextField
                    sx={{
                        width:180,
                    }}
                    disabled={Enabled ? false:true}
                  type="number"
                  size="small"
                  label="Interval (in seconds)"
                  variant="outlined"
                  value={GlobalInterval}
                  onChange={(e)=> setGlobalInterval(e.target.value)}
                  color={"secondary"}
                />
              </Stack>
            </Grid>
            <Grid item sm={7} textAlign={"right"}>
              <Button
                disabled={Enabled ? false:true}
                variant="outlined"
                color="secondary"
                onClick={handleArrow}
                endIcon={
                  Arrow ? (
                    <KeyboardDoubleArrowUpSharpIcon />
                  ) : (
                    <KeyboardDoubleArrowDownSharpIcon />
                  )
                }
              >
                Individual Task Settings
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Collapse in={Arrow && Enabled}>
          <Grid
            container
            spacing={5}
            sx={{
              paddingLeft: 15,
            }}
          >
            {props.tasksArray.map((item) => (
              <Grid item>
                <TaskItem data={item} reset={Enabled} globalInterval={GlobalInterval}></TaskItem>
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Stack>
    </Paper>
  );
}

export default TaskComponent;
