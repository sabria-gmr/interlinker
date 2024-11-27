import React, { useState, useEffect } from 'react';
import './step2.css';
import image from '../../../images/imgs.png';

const StepTwo = ({ data, onNext , onBack}) => {
  const [university, setUniversity] = useState('');
  const [diplomas, setDiplomas] = useState('');
  const [location, setLocation] = useState('');
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [students, setStudents] = useState([]);
  const [isStillStudent, setIsStillStudent] = useState(false);
  const [description, setDescription] = useState('');
  
   
  
  useEffect(() => {
    if (data) {
      setUniversity(data.university || '');
      setDiplomas(data.diplomas || '');
      setLocation(data.location || '');
      setBeginDate(data.beginDate || '');
      setEndDate(data.endDate || '');
      setStudents(data.students || []);
      setIsStillStudent(data.isStillStudent || false);
      setDescription(data.description || '');
    }
  }, [data]);
  const handleNext = () => {
    // Check if any required field is empty
    if (
      university.trim() === '' ||
      diplomas.trim() === '' ||
      location.trim() === '' ||
      beginDate.trim() === '' ||
      (!isStillStudent && endDate.trim() === '') 
    ) {
      // Display an error message or handle it as needed
      alert('Please fill in all the required fields.');
      return;
    }

    // Check if the person is still a student but didn't provide an end date
    if (isStillStudent && endDate.trim() !== '') {
      // Display a warning alert or handle it as needed
      alert('If you are still a student, please leave the End Date empty.');
    }

    // Call the onNext function and pass the data to the parent component
    onNext({ ...data, university, diplomas, location, beginDate, endDate, students, description });

    // Display a success alert (you can replace this with your preferred alert library)
    alert('Step Two completed successfully!');
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="container1" id="container" >
          <div className='cv-image'>
            <img src={image} alt="Signup" className="displayStep" />
          </div>
          <div className="circle">
              <div className="circle2" id="circle1"><p>1</p></div>
              <div className="circle1" id="circle2"><p>2</p></div>
              <div className="circle3" id="circle3"><p>3</p></div>
              <div className="circle4" id="circle4"><p>4</p></div>
              <div className="circle5" id="circle5"><p>5</p></div>
              <div className="circle6" id="circle6"><p>6</p></div>
          </div>
          <div className="Steps">
              <div className="step1">
              <p>STEP 1</p>
              <span className='span2'>Personnal  Information</span>
             </div>
             <div className="step1">
             <p>STEP 2</p>
             <span className='span2'>Trainings and Diplomas </span>
            </div>
            <div className="step1">
            <p>STEP 3</p>
            <span className='span2'>Professional Experience </span>
            </div>
            <div className="step1">
             <p>STEP 4</p>
             <span className='span2'>Skills & Languages </span>
             </div>
             <div className="step1">
             <p>STEP 5</p>
             <span className='span2'> Projects </span>
             </div>
             <div className="step1">
             <p>STEP 6</p>
             <span className='span2'>Rewards </span>
             </div>
           </div>
           
    <div className="stepContainer" id="stepContainer">
      <div className="affichStep2">
        <div className="stepInfo">
           <div><h2>Trainings and Diplomas</h2></div>
         
         
          <label>University:</label>
          <div >
          <select value={university} onChange={(e) => setUniversity(e.target.value)}>
            <option value="">Select Establishment</option>
            <option value="esi">ESI</option>
            <option value="estin">ESTIN</option>
          </select>
          </div>

          <label>Diplomas:</label>
          <div >
          <select value={diplomas} onChange={(e) => setDiplomas(e.target.value)}>
            <option value="">Select Diploma</option>
            <option value="liscence">LISCENCE</option>

           
            {/* Add more options as needed */}
          </select>
          </div>
          
          <label>Location:</label>
          <div>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            <option value="Alger">ALGER</option>
            {/* Add more options as needed */}
          </select>
          </div>

          <label>Beginning Date:</label>
          <div>
          <input type="date" value={beginDate} onChange={(e) => setBeginDate(e.target.value)} />
          </div>
          <label>End Date:</label>
          <div >
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}
            disabled={isStillStudent}  />
          </div>

          
          <div>
  <div className='check_box_two'>
    
    <input 
      type="checkbox"
      value="Still a Student"
      checked={isStillStudent}
      onChange={() => setIsStillStudent((prevValue) => !prevValue)}
     
    />
 
  </div>
  <span className='check_box_label' > currently student </span>
</div>


          
          <div className='cv'>
               <label>Description:</label>
               <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="textarea-styled" />
          </div>

          <div class="buttonContainerStepTwo">
             <button onClick={handleBack} className="goBack">Go back</button>
             <button onClick={handleNext} className="nextStep"> Next Step </button>

         </div>

        </div>
      </div>
    </div>
    </div>
    
  );
};

export default StepTwo;
