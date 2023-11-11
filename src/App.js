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
    <section className='bg-white dark:bg-gray-900 h-screen'>

    <div className="absolute top-2 right-2 text-gray-500">
      Created By Jitendriya Meher
    </div>

    <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20'>
      <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Age Calculator
      </h1>
      <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400 p-2'>
        Track Your Life&apos;s Progress: Age in Years, Months, Days
      </p>
      <Form calculateAge={calculateAge} />
      {
        age && <AgeResult age={age} />
      }
    </div>
  </section>
  );
}

export default App;
