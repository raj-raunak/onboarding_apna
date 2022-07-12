import React , {useState} from 'react'
import ReactDom from 'react-dom'
import Welcome from "./Welcome"
import Hiring from "./Hiring"

function Form({closeForm}) {
    
    const [page, setPage] = useState(0);
    const [formData, setFormData]= useState({
        name: "",
        comp_name: "",
        consultancy_name: "",
        comp_web: "",
        clients:"",
        consultancy_website: ""
    });
    const PageDisplay = ()=>{
        if(page==0){
            return <Welcome setPage={setPage} formData={formData} setFormData={setFormData}/>;
        }
        else if(page==1){
            return <Hiring setPage={setPage} formData={formData} setFormData={setFormData}/>;
        }

    }

    return(
        <div className='formBackground'>
            <div className='form'>
                <div className='progressbar'></div>
                <div className='form-container'>
                    <div className='header'>
                    </div>
                    <div className='body'>
                        {PageDisplay()}
                    </div>

                </div>

            </div> 
        </div>
  )
}

export default Form