import React, {useState} from 'react'
import {Input, Form} from 'antd'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'antd';
import TextError from '../TextError/TextError';
import Image from 'next/image';
import homelogo from '../../public/homelogo.jpeg'
import newlogo from '../../public/newlogo.jpeg'

  const Loginform = () => {

const [loading, setLoading] = useState(false)

 const validationSchema = Yup.object({
  email: Yup.string().email()
  .required("Email is required"),
  password: Yup.string()
  .min(6, "Password must be a minimum of 6 characters")
  .required("Password is required")
 })   

const formik = useFormik({
  initialValues: {
    email: "",
    password: ""
  },
  validationSchema:validationSchema,
  onSubmit: (values, {setSubmitting})=> {

    alert(JSON.stringify(values));
    setSubmitting(true)
    setLoading(true)
    console.log("===subnitted", values);
  }
  });

const loginbuttonstyle = () => {
  if((formik.isValid && formik.dirty) || (formik.isSubmitting)) {
    return 'login-button';
  }
  else {
    return 'login-button-disabled';
  }
}


  return (
   
      <section className='login-form'>
        <div className='login-form-control'>
        <div className='login-form-image'>
            <Image
          src={newlogo}
          alt="erron-icon"
          width="85px"
          height="75px"
        />
        <h3 className=''>Login</h3>
          </div>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className='login-form-input'>
              <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                  <Form.Item
                  name="email"
                  type='text'
                  placeholder="Enter Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`{${formik.errors.email && formik.touched.email}`}
                >
                  <Input />
                </Form.Item>
                {formik.touched.email && formik.errors.email ? (
                <TextError errMessage={formik.errors.email} />
                ) : null}    
            </div>
            <div className='login-form-input'>
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <Form.Item
                  name="password"
                  type='text'
                  placeholder="Enter Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`{${formik.errors.password && formik.touched.password}`}
                >
                  <Input.Password />
                </Form.Item>
                {formik.touched.password && formik.errors.password ? (
                <TextError errMessage={formik.errors.password} />
                ) : null}  
            </div>
            <div className='login-button'>
            <Button
            className={`btn  ${true ? loginbuttonstyle() : 'btn-primary'} transition-3d-hover`}
             disabled={
              !(formik.isValid && formik.dirty) || formik.isSubmitting
              }
             htmlType="submit"
             loading={loading}
             >
             Login
            </Button>
            </div>
         </form>
        </div>
      </section>
   
  )
}

export default Loginform;
