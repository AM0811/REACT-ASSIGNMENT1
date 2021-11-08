//ASSIGNMENT 1
import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";


//Q2 one instance of the MedicalTreatment
const treatId1  = "AS248";
const treatCourseId1 = "1";
const type1 = "chemo";
const category1 = "1";
const name1 = "Agnes";
const startDate1 = Date(); 

export default function App() {
  return (
    <div>
      <MedicalTreatment name = {name1} treatId = {treatId1} treatCourseId = {treatCourseId1} type = {type1} category = {category1} startDate = {startDate1}/>
    </div>
  );
}
