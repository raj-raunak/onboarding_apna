import React from 'react'

function InterviewerInfo({setPage}) {
  return (
    <div>
      <div className='back_button'>
        <button 
        onClick={()=>{
          setPage((currPage)=>currPage-1)
      }}>back</button>
      </div>
      <div className='int_det'>
        Interviewer Details<br/>
        Who would be connecting with candidates and hire them for this job? <br/>
      </div>
      <div className='choice'>
        <input type="radio" id="option1" className='option' name="ch" />
        <label for="option1">Myself</label>
        <input type="radio" id="option2" className='option' name="ch"/>
        <label for="option2">Other Recruiter</label>
      </div>

      {/* Myself */}
      <div className='myself' >
        <div className='name'>
        Recruiter's Name <br/>
        <input type ="text"/>
        </div>
        <div className='num'>
          HR Whatsapp Number<br/>
          <input type ="text" placeholder='4694392393'/>
        </div>
      </div>

      {/* Other Recruiter */}
      <div className='oth'>
        <input type ="text" placeholder='Recruiter Name'/> <br/>
        <input type ="number" placeholder='HR Whatsapp Number'/>
        <input type ="email" placeholder='Contact Email'/>
      </div>


      {/* <div className='man_cand'>
        buttons
      </div> */}

      <div className='comp_add'>
        <input type="radio" id="option1" className='option' name="comp_ad" />
        <label for="option1">Same as interview location</label>
        <input type="radio" id="option2" className='option' name="comp_ad"/>
        <label for="option2">Different from interview location</label>
      </div>

      {/* Diff Location */}
      <div className='comp_dif'>
        <input type ="text" placeholder='City'/> 
        <input type ="text" placeholder='Area'/> <br/>

        <div className='cmpt add'>
          Complete Address<br/>
          <input type ="text" placeholder='Enter Google Loaction'/> 
        </div>
      </div>

      <div className='mov'>
        Would you be interested in hiring candidates who would be willing to move to CITY
         for your job ?<br/>
        <input type="radio" id="option1" className='option' name="mov_ct" />
        <label for="option1">Yes</label>
        <input type="radio" id="option2" className='option' name="mov_ct"/>
        <label for="option2">No</label>
      </div>

      <div >
        <button className='button2'
        onClick={()=>{
          setPage((currPage)=>currPage+1)
      }}>Continue</button>
      </div>

      
    </div>
  )
}

export default InterviewerInfo