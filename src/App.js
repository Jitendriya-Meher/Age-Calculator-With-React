import { useState } from "react";
import "./App.css";
import AgeResult from "./Components/AgeResult";
import Form from "./Components/Form";
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";

function App() {

  const [age,setAge] = useState(null);

  const calculateAge = (dob) => {
    console.log(dob);

    const today = new Date();
    const dobObj = new Date(dob);

    console.log(today,dobObj);

    const ageDif = differenceInYears(today,dobObj);
    const monthsDif = differenceInMonths(today,dobObj);
    const daysDif = differenceInDays(today,dobObj);

    setAge({
      age: ageDif,
      months: monthsDif,
      days: daysDif
    });

    console.log(ageDif,monthsDif,daysDif);

  }

  return (
    <div className="">

      <h1 className="">
        Age Calculator
      </h1>
      <Form calculateAge={calculateAge}></Form>
      {
        age && <AgeResult age={age}></AgeResult>
      }
      
    </div>
  );
}

export default App;
