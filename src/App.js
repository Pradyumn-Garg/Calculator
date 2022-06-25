import "./App.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { Box } from '@mui/material';


function App() {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [resultValue, setResultValue] = useState("");

  const Add = (e) => {
    let evaluation = "",temp=" = ",operation="+";
    try {
      evaluation = eval(numberOne + operation + numberTwo);
    } catch (error) {
      evaluation = "ERROR";
    }
    evaluation= numberOne+operation+numberTwo+temp+evaluation;
    setResultValue(evaluation);
  }

  const Sub = (e) => {
    let evaluation = "",temp=" = ",operation="-";
    try {
      evaluation = eval(numberOne + operation + numberTwo);
    } catch (error) {
      evaluation = "ERROR";
    }
    evaluation= numberOne+operation+numberTwo+temp+evaluation;
    setResultValue(evaluation);
  }

  const Mul = (e) => {
    let evaluation = "",temp=" = ",operation="*";
    try {
      evaluation = eval(numberOne + operation + numberTwo);
    } catch (error) {
      evaluation = "ERROR";
    }
    evaluation= numberOne+operation+numberTwo+temp+evaluation;
    setResultValue(evaluation);
  }

  const Div = (e) => {
    let evaluation = "",temp=" = ",operation="/";
    try {
      evaluation = eval(numberOne + operation + numberTwo);
    } catch (error) {
      evaluation = "ERROR";
    }
    evaluation= numberOne+operation+numberTwo+temp+evaluation;
    setResultValue(evaluation);
  }

  return (
    <div className="page">
      <div className="header">
        <h1> Calculator </h1>
      </div>
      <Box sx={{ '& > :not(style)': { m: 1 }, maxWidth: '542px', marginTop: '20px', marginLeft: '10px' }}>
        <TextField  id="outlined-basic" label="NumberOne"  onChange={(e) => {setNumberOne(e.target.value);}} value={numberOne} variant="outlined" />

        <TextField  id="outlined-basic" label="NumberTwo" onChange={(e) => {setNumberTwo(e.target.value);}} value={numberTwo} variant="outlined" />
      
        <Button sx={{width:"41%", fontSize:"25px"}} variant="contained" color="success" disabled={!(numberTwo !== undefined && numberOne !== undefined)} onClick={(e) => {Add(e.target.value);}}>+</Button>

        <Button sx={{width:"41%", fontSize:"25px"}} variant="contained" color="success" disabled={!(numberTwo !== undefined && numberOne !== undefined)} onClick={(e) => {Sub(e.target.value);}}>-</Button>

        <Button sx={{width:"41%", fontSize:"25px"}} variant="contained" color="success" disabled={!(numberTwo !== undefined && numberOne !== undefined)} onClick={(e) => {Mul(e.target.value);}}>*</Button>

        <Button sx={{width:"41%", fontSize:"25px"}} variant="contained" color="success" disabled={!(numberTwo !== undefined && numberOne !== undefined)} onClick={(e) => {Div(e.target.value);}}>/</Button>

        <div style={{marginLeft:"29%", fontSize:"15px"}} className="text-alligned">
          <h2>
              {resultValue}
          </h2>
        </div>
      </Box>
    </div>
  );
}

export default App;