export default function validateEmail(email){
const emailRegEx=new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
if(email){
    if(emailRegEx.test(email)){
        return true;
    }
    else{
        return false;
    }
}
}

