
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'


import illustration from "../assets/work-pressure.svg";




function Signin() {
    return (
    <div className='signup-container'>
        <div className='signup-container-illustration'>
            <img src={illustration} />
        </div>
        <div className='signup-container-form'>
           <h1><i className="pi pi-user"></i>Sign in</h1>
            <form className='signup-form'>
                <span className='p-input-icon-left'>
                    <i className="pi pi-envelope"></i>
                    <InputText className='p-inputtext-lg' placeholder="Email" />
                </span>
                <span>
                    <Password className='p-inputtext-lg' placeholder="Password" toggleMask />
                </span>
                <span>
                    <Password className='p-inputtext-lg' placeholder="Re-Enter Password" toggleMask/>
                </span>
                <a href="/snippets" >Sign In</a> 
                <Button label="Already have account?" serverity="info" text />
            </form>
        </div>
   </div>
 );
}

export default Signin;