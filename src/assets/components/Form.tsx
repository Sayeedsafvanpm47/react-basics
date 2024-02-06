
// building form
// const Form = () => {
//   return (
// <form>
//           <div className="mb-3"><label htmlFor="name" className="form-label">Name</label><input id="name" type="text" className="form-control" /></div>
//           <div className="mb-3"><label htmlFor="age" className="form-label">Age</label><input id="age" type="number" className="form-control" /></div>
//           <button className="btn btn-primary" type="submit">Submit</button>
// </form>
//   )
// }






// export default Form

// import { FormEvent } from "react"
// const Form = () => {
//           const handlerSubmit = (event:FormEvent)=>{
//                     event.preventDefault()
//                     console.log('submitted')
//           }
//           return (
//         <form onSubmit={handlerSubmit}>
//                   <div className="mb-3"><label htmlFor="name" className="form-label">Name</label><input id="name" type="text" className="form-control" /></div>
//                   <div className="mb-3"><label htmlFor="age" className="form-label">Age</label><input id="age" type="number" className="form-control" /></div>
//                   <button className="btn btn-primary" type="submit">Submit</button>
//         </form>
//           )
//         }
        
//         export default Form

// accessing input fieds 
// import { FormEvent, useRef } from "react"
// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name : '', age : 0}
//   const handlerSubmit = (event:FormEvent)=>{
//    event.preventDefault()
//    if(nameRef.current !== null)
//      person.name = nameRef.current.value 
//      if(ageRef.current !== null)
//      person.age = parseInt(ageRef.current.value)
//     console.log(person)
//   }
 


//   return (
//     <form onSubmit={handlerSubmit}>
//       <div className="mb-3"><label htmlFor="name" className="form-label">Name</label><input ref={nameRef} id="name" type="text" className="form-control" /></div>
//       <div className="mb-3"><label htmlFor="age" className="form-label">Age</label><input ref={ageRef} type="number" id="age" className="form-control" /></div>
//       <button className="btn btn-primary" type="submit">Submit</button>
//     </form> 
//   )
// }
// export default Form

// ends..


// controlled components 
// import { FormEvent, useState } from "react"


// const Form = ()=>{
//   const [person,setPerson] = useState({name:'',age:''})
//   const handlerSubmit = (event:FormEvent)=>{
//   event.preventDefault()
//   console.log(person)
//   }
//   return (
//     <form onSubmit={handlerSubmit}>
//       <div>
//         <label htmlFor="name" className="form-label">Name</label><input onChange={(event)=>setPerson({...person,name:event.target.value})} value={person.name} type="text" className="form-control" id="name" />
//       </div>
//       <div>
//         <label htmlFor="age" className="form-label">Age</label><input onChange={(event)=>setPerson({...person,age:parseInt(event.target.value)})} value={person.age} type="number" className="form-control" id="age" />
//       </div>
//       <button className="btn btn-primary" type="submit"> Submit </button>
//     </form> 
//   )
// }
// export default Form 

// react hook forms
// import { FieldValues, useForm } from "react-hook-form";
// const Form = ()=>{
//   const {register,handleSubmit} = useForm()
//   const onSubmit = (data:FieldValues) => console.log(data)
//   return (
  
//     <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label htmlFor="name" className="form-label">Name</label><input {...register('name')} type="text" className="form-control" id="name" />
//           </div>
//          <div>
//           <label htmlFor="age" className="form-label">Age</label><input {...register('age')} type="number" className="form-control" id="age" />
//           </div>
//          <button className="btn btn-primary" type="submit"> Submit </button>
//         </form> 
//   )
// }
// export default Form;

// validation using react hook forms 

// import { FieldValues,useForm} from "react-hook-form";
// interface FormData{
//   name:string,
//   age:number
// }
// const Form = ()=>{
//   const {register,handleSubmit,formState : {errors}} = useForm<FormData>()
//   const onSubmit = (data:FieldValues)=>console.log(data)
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//            <div>
//              <label htmlFor="name" className="form-label">Name</label><input {...register('name',{required:true,minLength:3})} type="text" className="form-control" id="name" />
//              {errors.name?.type=='required' && <p className="text-danger">Please fill in the name</p>}
//              {errors.name?.type=='minLength' && <p className='text-danger'>Please enter more than 3 charecters</p>}
//          </div>
//         <div>
//          <label htmlFor="age" className="form-label">Age</label><input {...register('age')} type="number" className="form-control" id="age" />
//           </div>
//          <button className="btn btn-primary" type="submit"> Submit </button>
//          </form> 
//   )
//   }
//   export default Form;


// schema based validation 

  import { FieldValues, useForm } from "react-hook-form";
  import {z} from 'zod';
  import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

  const Form = ()=>{
    const schema = z.object({
      name : z.string().min(3,{message:'minimum 3 charecters required'}),
      age : z.number({invalid_type_error:'Age field is required'}).min(18,{message:'age must be 18 or above'})
    })
    type FormData = z.infer<typeof schema> 
    const {register,handleSubmit,formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)})
  const onSubmit = (data:FieldValues) => console.log(data)
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3"><label htmlFor="name">Name</label><input {...register('name')} type="text" className="form-control" id="name" /></div>
        {errors.name && <p>{errors.name.message}</p>}
        <div className="mb-3"><label htmlFor="age">Age</label><input {...register('age',{valueAsNumber:true})} type="number" className="form-control" id="age" /></div>
        {errors.age && <p>{errors.age.message}</p>}
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }
  export default Form