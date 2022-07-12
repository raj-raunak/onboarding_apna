import React, {useState} from 'react'

function CandidateReq({setPage}) {
  const [status, setStatus] = useState(0)
  const radioHandler = (status) => {
    setStatus(status);
  };
  return (
    <div>
      
      <div className='cand_req'>
        Candidate Requirements <br/><br/>
      </div>

      <div className='min_edu'>
        <label for="min_edu"></label>
        <select name="job_type" id="job_type">
          <option value="10">10th or Below 10th</option>
          <option value="12">12th Pass</option>
          <option value="diploma">Diploma</option>
          <option value="pg">Post Graduate</option>
        </select>
      </div>
      <div className='gender'>
        Gender<br/>
          <input type="radio" id="option1" className='option' name="gen" />
          <label for="option1">Male</label>
          <input type="radio" id="option2" className='option' name="gen"/>
          <label for="option2">Female</label>
          <input type="radio" id="option3" className='option' name="gen" />
          <label for="option3">Both</label>
      </div>
      <div className='exp'>
        Experience required <br/>
          <input type="radio" id="option1" className='option' name="exp_req" 
          checked={status==0} onClick={(e) => radioHandler(0)}/>
          <label for="option1">Fresher & Experienced</label><br/>
          <input type="radio" id="option2" className='option' name="exp_req" 
          checked={status==1} onClick={(e) => radioHandler(1)}/>
          <label for="option2">Experienced only</label>
      </div>
      {status ==1 && (<div className='exp_yr'>
        <input type ="text" placeholder='Min. years'/>
        <input type ="text" placeholder='Max. years'/>
      </div>)}

      <div className='eng_lev'>
        English level required<br/>
        Candidates will be tested on English fluency 
        if you select Good/Fluent English options<br/>
        <input type="radio" id="option1" className='option' name="eng" />
        <label for="option1">No English</label>
        <input type="radio" id="option2" className='option' name="eng"/>
        <label for="option2">Thoda English</label>
        <input type="radio" id="option3" className='option' name="eng" />
        <label for="option3">Good English</label><br/>
      </div>
      <div className='description'>
      <input type ="text" placeholder='Job description / Additional requirement'/>
      </div>
      <div className='both_button'>
        <span>
          <button  className='back_button2'
          onClick={()=>{
            setPage((currPage)=>currPage-1)
        }}>back</button>
        </span>
        <span>
          <button className='button2'
          onClick={()=>{
            setPage((currPage)=>currPage+1)
        }}>Continue</button>
        </span>
      </div>
    </div>
  )
}

export default CandidateReq