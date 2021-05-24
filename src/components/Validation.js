const Validation =(values) =>{

    let errors={};
    if(!values.fullname){
        errors.fullname="required name"
        
    }
    if(!values.email){
        errors.email="Email is reqired "
     } /*else if(!/\S+@\S+\.S+/.test(values.email)){
         errors.email="Email is ivalid"

        }*/
        if(!values.password){
            errors.password="password is required"

        }
        else if(values.password.length < 5){
            errors.password="password must be five char"

        }
        return errors;

    
}

    export default Validation;
