import React from 'react'

function SelectPlan({setPage}) {
  return (
    <div>
       
      <div className="box">
        <div className="box1">
          <div className="small">
            <input type="radio" name="refer" value="small" id="option-1" />
            <label for ="option-1">SMALL</label>
          </div>
          <div className="num"> <img className="num1" src="apna.png"/> 200</div>
          <div className="app"><img className="num2" src="apna.png"/>10 applications</div>
          <hr/>
          <div className="low"><img className="num3" src="apna.png"/>20 per application <br/> <img className="num4" src="apna.png"/>Expires after 10 applications or in 15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; days</div>
          <div className="bot">Best for 1 hire</div>
        </div>

        <div className="box2">
          <div className="pop"> Most Popular</div>
          <div className="stand">
            <input type="radio" name="refer" value="standard" id="option-2" />
            <label for ="option-2">STANDARD</label>
          </div>
          <div className="num"><img className="num1" src="apna.png"/> 600</div>
          <div className="app"><img className="num2" src="apna.png"/>30 applications</div>
          <hr/>
          <div className="low"><img className="num3" src="apna.png"/>20 per application <br/> <img className="num4" src="apna.png"/>Expires after 30 applications or in 15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; days</div>
          <div className="bot">Best for 1-4 hires</div>
        </div>

        <div className="box3">
          <div className="off"> 10% OFF </div>
          <div className="lar">
            <input type="radio" name="refer" value="large" id="option-3" />
            <label for ="option-3">LARGE</label>
          </div>
            <div className="num"><img className="num1" src="apna.png"/> <s>3000</s> 2700</div>
          <div className="app"><img className="num2" src="apna.png"/>150 applications</div>
          <hr/>
          <div className="low"><img className="num3" src="apna.png"/><s>20</s> 18 per application <br/> <img className="num4" src="apna.png"/>Expires after 150 applications or in 60 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; days</div>
          <div className="bot">Best for larger hiring needs</div>
        </div>
    </div>

    <div className='imp_tips'>
      <div className='he'> Important Tips</div>
      <div className='tips'>
      Applications are subject to jobs attractiveness and competition<br/>
      Renew job once target applications are reached, to get more applications<br/>
      Quick response & correct job information will give much better results<br/>
      De-activate your job once you have filled your position<br/>
      Any unethical practices will be immediately reported to the authorities with your KYC details<br/>
      </div>
    </div>
    
    <div className='tc'>
      <input type="checkbox" id="tc" name="tc" value="tc" />
      <label for="tc"> I agree to the Apna's Terms of Services and Code of Conduct</label><br/>
    </div>
    <div >
      <button className='back_button2'
      onClick={()=>{
        setPage((currPage)=>currPage-1)
        }}>Back</button>
    </div>
    <div className='submit'>
      <button>Post Job with 300 coins</button>
    </div>
  </div>
  )
}

export default SelectPlan