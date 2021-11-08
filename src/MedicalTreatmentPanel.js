import React from "react";

function MedicalTreatmentPanel(){

  //React Hooks
  const[medicaltreatmenttreatId, setMedicaltreatmentTreatId] = React.useState('');
  const[medicaltreatmenttreatCourseId, setMedicaltreatmentTreatCourseId] = React.useState('');
  const[medicaltreatmenttype, setMedicaltreatmentType] = React.useState('');
  const[medicaltreatmentcategory, setMedicaltreatmentCategory] = React.useState('');
  const[medicaltreatmentname, setMedicaltreatmentName] = React.useState('');
  const[medicaltreatmentstartdate, setMedicaltreatmentStartDate] = React.useState('');


  function eventHandler(){
    window.alert( name = {name} treatId = {treatId} treatCourseId = {treatCourseId} type = {type} category = {category} startDate = {startDate});
  }

  // function onChangeHandler(){
  //   setTreatId('');
  //   setTreatCourseId('');
  //   setType('');
  //   setCategory('');
  //   setName('');
  //   setStartDate('');
  // }

  

  return(
    <div>
      <input placeholder= "Treatment Id" value={medicaltreatmenttreatId} onChange ={e => setMedicaltreatmentTreatId(e.target.value)}/>

      <br/>

      <input placeholder= "Treatment Course Id" value={medicaltreatmenttreatCourseId} onChange ={e => setMedicaltreatmentTreatCourseId(e.target.value)}/>

      <br/>

      <input placeholder= "Type" value={medicaltreatmenttype} onChange ={e => setMedicaltreatmentType(e.target.value)}/>

      <br/>
      
      <input placeholder= "Category" value={medicaltreatmentcategory} onChange ={e => setMedicaltreatmentCategory(e.target.value)}/>

      <br/>
      
      <input placeholder= "Name" value={medicaltreatmentname} onChange ={e => setMedicaltreatmentName(e.target.value)}/>

      <br/>
      
      <input placeholder= "Start Date" value={medicaltreatmentstartdate} onChange ={e => setMedicaltreatmentStartDate(e.target.value)}/>

      <br/>
      {/* {treatId}
      {treatCourseId} */}

      <button onClick = {eventHandler}>readanddisplay</button>

        </div> 


  )
}

export default MedicalTreatmentPanel;