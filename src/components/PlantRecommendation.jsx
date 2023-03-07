import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const PlantRecommendation = () => {
  const [crop, setCrop] = useState()
  
  return (
    <Card
      className="mx-auto mt-6 card-ab scale-up-center"
      style={{ width: '80%' }}
    >
        <div>
     <Formik
       initialValues={{
        N: 0,
        P: 0,
        K: 0,
        temp: 0,
        humidity: 0,
        ph:0,
        rainfall:0,
        model: 'svm'
       }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.email) {
      //      errors.email = 'Required';
      //    } else if (
      //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //    ) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  }}
       onSubmit={async(values, { setSubmitting }) => {
        

           const okay=await fetch(`http://127.0.0.1:5000/predict?model=${values.model}&n=${values.N}&p=${values.P}&k=${values.K}&temperature=${values.temp}&humidity=${values.humidity}&ph=${values.ph}&rainfall=${values.rainfall}`  )
           const kk= await okay.json()
           console.log(kk) 
           setCrop(kk)
           setSubmitting(false);

      
        //  setTimeout(() => {
        //   //  alert(JSON.stringify(values, null, 2));

        //    console.log(values)
        //    setSubmitting(false);
        //  }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <div className="form-group row">
          <label className="col-form-label">N</label>
           <Field type="number" name="N" />
          </div>
           {/* <ErrorMessage name="email" component="div" /> */}
           <div className="form-group row">
           <label className="col-form-label">P</label>
           <Field type="number" name="P" />
           </div>
           <div className="form-group row">
           <label className="col-form-label">K</label>
           <Field type="number" name="K" />
          </div>
          <div className="form-group row">
          <label className="col-form-label">Temp</label>
           <Field type="number" name="temp" />
          </div>
          <div className="form-group row">
          <label className="col-form-label">Humidity</label>
           <Field type="number" name="humidity" />
          </div>
          <div className="form-group row">
          <label className="col-form-label">ph</label>
           <Field type="number" name="ph" />
          </div>
          <div className="form-group row">
          <label className="col-form-label">rainfall</label>
           <Field type="number" name="rainfall" />
          </div>
          <div className="form-group row">
          <label className="col-form-label">model</label>
          <Field as="select" name="model">
             <option value="rf">Random Forest</option>
             <option value="dt">Deceision tree</option>
             <option value="svm">SVM</option>
           </Field>
          </div>
           {/* <ErrorMessage name="password" component="div" /> */}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
   {crop && <div>{crop.crop}</div>}
    </Card>
  )
}

export default PlantRecommendation
