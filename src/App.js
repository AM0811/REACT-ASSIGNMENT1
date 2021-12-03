//ASSIGNMENT 
//Q1
import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment"


//Q2 one instance of the MedicalTreatment
const treatId  = 1;
const treatCourseId = "AS01";
const type = "Radiation";
const category = "Sarcoma";
const name = "Brachyerapy";
const startDate = "01/01/2021"; 

export default function App() {
  return (
    <div>
      <MedicalTreatment name = {name} treatId = {treatId} treatCourseId = {treatCourseId} type = {type} category = {category} startDate = {startDate}/>

      <br/>
      
    </div>
  );
}
