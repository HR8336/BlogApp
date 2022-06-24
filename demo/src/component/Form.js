import React from 'react'
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Select from 'react-select'
import { yupResolver } from "@hookform/resolvers/yup";
import "./form.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const Form = () => {

  const defaultValue = {
    name : '',
    email: '',
    category: '',
  }
    const options = [
        {  label: 'Health' , value: 'Health'},
        { label: 'News', value: 'News'},
        { label: 'Music' , value: 'Music' },
       ];
    const schema = yup.object().shape({
        email: yup.string().email("Enter valid email").required("Please Enter Email"),
        name: yup.string().min(4 , "name is no less then 4 char").max(32 , "name is not more then 32 char").required(),
        category : yup.object().required("select atleast one interest")
      }); 
        const { register, handleSubmit, formState: { errors } , reset ,control , watch  } = useForm({
          mode : "onBlur",
          resolver: yupResolver(schema),
          defaultValue
        });
        const onSubmitHandler = (data) => {
          console.log(data)
          reset()
        };
        return (
            <> 
            <div className='boxWrap'>
            <form  onSubmit={handleSubmit(onSubmitHandler)}>

            <br />  
            <input
              {...register("name" , {onBlur : () => console.log(watch('name')) })}
              placeholder="name"
              type="text"
              required
            />
            <p>{errors.name?.message}</p>
            <br />
               
            <input {...register("email" , {onBlur : () => console.log(watch('email'))}) } placeholder="email" type="email"/>
            <p>{errors.email?.message}</p>
            <br />
  
            <Controller
                control={control}
                name={"category"}
                defaultValue = ''
                   render={({ field }) => (
                     <Select
                     {...field }
                     options={options}
                     onBlur={() => {
                      watch('category') &&  console.log(watch('category'));           
              }}
                     />
            )}             
             />
            <p>{errors.category?.message}</p>
            <br/>
            <div>
                  <input name="ch1" type="checkbox" {...register('ch1' , {onBlur : () => console.log(watch('ch1'))})}/>
                  <label>CH1</label>  
                  <input name="ch2" type="checkbox" {...register('ch2' , {onBlur : () => console.log(watch('ch2'))})}/>
                  <label>CH2</label>                   
                  <p>{errors.acceptTerms?.message}</p>
             </div>           
             <Controller
                name="calender"
                control={control}
                required
                render={({ field }) => (
                    <Datetime
                        {...field}
                        inputProps={{
                            placeholder: "MM-DD-YYYY HH:mm",
                        }}
                viewMode="time"
                onClose={() => {
                  watch('calender') && console.log(watch('calender')._d);      
                  }}
              />
            )}
        />
        <br/>

            <button type="submit">Submit</button>
            </form>
            </div>
            </>         
        );      
}
export default Form