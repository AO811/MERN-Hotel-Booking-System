import { useParams } from "react-router-dom";
// import StudentForm from "./StudentForm";
import { useEffect, useState } from "react";
import Axios from "axios";


export default function UpdateUser(){
    const{id}=useParams();
    const[initialValue,setInitialValue]=useState({name:"",email:"",regNo:""})
   
    useEffect(()=>{
        Axios.get("http://localhost:4000/userRoute/UpdateUser/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,email,password}=res.data;
                setInitialValue({name,email,password});
            }  
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    },[id])
  
    return(
        <form>
            <StudentForm
                         nameValue={initialValue.name}
                         emailValue={initialValue.email}
                         passwordValue={initialValue.regNo}
                         />
        </form>
    )
}


