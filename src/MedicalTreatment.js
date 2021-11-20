import React from 'react';


// 1 Component MedicalTreatment.js
//  creating a function called MedicalTreatment with its parameters.
export default function MedicalTreatment(props){
  return(
    <div>
      <p>{props.name} </p>
      <p>{props.treatId} </p>
      <p> {props.treatCourseId} </p>
      <p>{props.type} </p>
      <p>{props.category} </p>
      <p>{props.startDate} </p>     
      </div>
  )
}