import React from 'react';


// 1 Component MedicalTreatment.js
//  creating a function called MedicalTreatment with its parameters.
export default function MedicalTreatment(props){
  return(
    <div>
      <p><h1>Patient Treatment Record</h1></p>
      <p>Treatment Id: {props.treatId} </p>
      <p>Treatment Name: {props.name} </p>
      
      <p>Treatment Course Id: {props.treatCourseId} </p>
      <p>Treatment Type: {props.type} </p>
      <p>Treatment Category: {props.category} </p>
      <p>Treatment Start Date: {props.startDate} </p>     
      </div>
  )
}