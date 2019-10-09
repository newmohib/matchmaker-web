import React, { memo } from 'react';
import { Input, DateInput, Select } from 'components/Form';


export const LoginForm = React.memo((props) => {
    const { handleSubmit, handleChange } = props;
    return (
        <div>
        <form onSubmit={handleSubmit} >
            <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12 errorStyle">
                    <label htmlFor={"username"}>Username</label>
                    <Input
                        onChange={handleChange}
                        name={"username"}
                        type="text"
                        autoFocus="autoFocus"
                    // errors={errors.password}
                    //value={value.password}
                    />
                </div>
                <div className="col-12 col-lg-12 col-md-12 col-sm-12 errorStyle">
                    <label htmlFor={"password"}>Password</label>
                    <Input
                        onChange={handleChange}
                        name={"password"}
                        type="password"
                        autoFocus=""
                    // errors={errors.confPassword}
                    //value={value.confPassword}
                    />
                </div>
            </div>
            <div className="row justify-content-center mt-2" >
                <div className="col-12 ">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </div>
        </form>
        </div>
    )
})