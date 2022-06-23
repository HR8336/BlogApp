import React from 'react'
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Select from 'react-select'
import { yupResolver } from "@hookform/resolvers/yup";
import "./form.css"

const Form = () => {

    const options = [
        {  label: 'Health' , value: 'Health'},
        { label: 'News', value: 'News'},
        { label: 'Music' , value: 'Music' },
       ];
    const schema = yup.object().shape({
        email: yup.string().email().required().test('unique mail' , "already use in mail" , ()=>{
          const fixMail = watch('email')
          let mail = false
          if(fixMail !== 'harsh@mail.com'){
            mail = true
          }
          return mail
        }),
        name: yup.string().min(4 , "name is no less then 4 char").max(32 , "name is not more then 32 char").required(),
        category : yup.object().required()
      }); 
        const { register, handleSubmit, formState: { errors } , reset ,control , watch} = useForm({
          resolver: yupResolver(schema),
        });
        const onSubmitHandler = (data) => {
          reset()
        };
        return (
            <> 
            <div className='boxWrap'>
            <form  onSubmit={handleSubmit(onSubmitHandler)}>

            <br />  
            <input
              {...register("name")}
              placeholder="name"
              type="text"
              required
            />
            <p>{errors.name?.message}</p>
            <br />
               
            <input {...register("email")} placeholder="email" type="email"/>
            <p>{errors.email?.message}</p>
            <br />
  
            <Controller
                control={control}
                name={"category"}
                defaultValue=""
                   render={({ field }) => (
                     <Select
                     {...field}
                     options={options}
                     />
                   )}
             />
                 <p>{errors.category?.message}</p>
            <br/>
            <div>
                  <input name="ch1" type="checkbox" {...register('ch1')}/>
                  <label>CH1</label>  
                  <input name="ch2" type="checkbox" {...register('ch2')}/>
                  <label>CH2</label>                   
                  <p>{errors.acceptTerms?.message}</p>
             </div>           
            <button type="submit">Submit</button>
            </form>
            </div>
            </>         
        );      
}
export default Form