import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Login() {
    const history = useHistory();
    
    const validationSchema = Yup.object().shape({
        userName: Yup.string()
            .required('Username is required'),      
        password: Yup.string()
            .transform(x => x === '' ? undefined : x)
            .concat(Yup.string().required('Password is required'))
            .min(6, 'Password must be at least 6 characters'),
    });
    const { register, handleSubmit, reset, errors, formState } = useForm({
        resolver: yupResolver(validationSchema)
    });
    function onSubmit(data) {
        let path = `/`; 
        history.push(path);
        localStorage.setItem('username', data.userName);
    }
    
    return (
        <div>
         
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
        <h1>{'Edit User'}</h1>
        <div className="form-row">
            <div className="form-group col-5">
                <label>User Name</label>
                <input name="userName" type="text" ref={register} className={`form-control ${errors.userName ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.userName?.message}</div>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-5">
                <label>Password</label>
                <input name="password" type="password" ref={register} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
        </div>
        <div className="form-group">
            <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Login
            </button>
        </div>
    </form>
        
        </div>
    );
}

export { Login };