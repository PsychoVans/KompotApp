
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/Toast'

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
                    <InputText placeholder="Email" />
                </span>
                <span className='p-input-icon-left'>
                    <i className="pi pi-lock"></i>
                    <Password/>
                </span>
                <span className='p-input-icon-left'>
                    <i className="pi pi-lock"></i>
                    <Password/>
                </span>
                <Button label="Sign in" serverity="help" />
                <Button label="Already have account?" serverity="info" text />
            </form>
        </div>
   </div>
 );
}

export default Signin;