//ASSIGNMENT 
//Q1
import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment"


//Q2 one instance of the MedicalTreatment
const treatId  = "AS248";
const treatCourseId = "1";
const type = "chemo";
const category = "1";
const name = "Agnes";
const startDate = Date(); 

export default function App() {
  return (
    <div>
      <MedicalTreatment name = {name} treatId = {treatId} treatCourseId = {treatCourseId} type = {type} category = {category} startDate = {startDate}/>

      <br/>
      
    </div>
  );
}
