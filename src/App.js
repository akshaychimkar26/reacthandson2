import React, { useState } from "react";
import "./style2.css"

  function App(){
    const [allFormData,setAllFormData]=useState([]);
    const [formData,setFormData]=useState(
      {
        name:"",
        department:"",
        rating:"",
      }
    );

    const handleChange=(event)=>{
      setFormData({...formData,[event.target.name]:event.target.value});
      console.log(formData);
    };

    return (
      <div className="App">
        <h2 className="heading">EMPLOYEE FEEDBACK FORM</h2>
        <div className="form">
        <form onSubmit={(e)=>{console.log(e.target.reset());}}>
        <label className="l1">Name:</label><input className="i1" type="text" name="name" value={formData.name} onChange={handleChange}></input><br/><br/>
        <label className="l1">Department:</label><input className="i1" type="text" name="department" value={formData.department}  onChange={handleChange}></input><br/><br/>
        <label className="l1">Rating:</label><input className="i1" type="number" name="rating" value={formData.rating}  onChange={handleChange}></input><br/><br/>
        <button onClick={(parens)=>{
        parens.preventDefault();
        const tempObj=[...allFormData];
        tempObj.push(formData);
        setAllFormData(tempObj);
        console.log(allFormData);
        setFormData({
          name:"",
          department:"",
          rating:"",
        });
        }} className="i2">Submit</button>
        </form>
        </div>
        <div className="resultContainer">
        <div className="result">
        {
          allFormData.map((value,index)=>{
            return(
            <div key={index} className="resultin">
              Name:{value.name}|Department:{value.department}|Rating:{value.rating}
            </div>
            )
          })
        }        
        </div>
        </div>

        

        

      </div>
      );
    }
  
    export default App;
  

  
