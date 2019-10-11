import Joi from '@hapi/joi';

const inputName={
    username:"username",
    password:"password"
}

const inputLable={
    username:"Username",
    password:"Uassword"
}


const schema = Joi.object({
    [inputName.username]: Joi.string().required(),
    [inputName.password]: Joi.string().required()
  });

 export const validateProperty = (input) => {
    let {name,value}=input;
    let result= schema.validate({ [name]: value});
    let errors = null;
    if (result.errors) {
      errors = "Required";
    }
    return errors;
  }