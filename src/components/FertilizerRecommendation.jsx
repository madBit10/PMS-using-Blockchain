import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Row, Col } from 'react-bootstrap'

const FertilizerRecommendation = () => {
    const [result, setResult] = useState({})
  return (
    <Card
    className="mx-auto mt-6 card-ab scale-up-center"
    style={{ width: '80%' }}
  >
    <Row>
      <Formik
        initialValues={{
          N: 0,
          P: 0,
          K: 0,
          temp: 0,
          humidity: 0,
          ph: 0,
          rainfall: 0,
          model: 'svm',
        }}
       
        onSubmit={async (values, { setSubmitting }) => {
          const okay = await fetch(
            // `http://127.0.0.1:5000/fertilizer?cropname=${values.crop}&nitrogen=${values.N}&phosphorous=${values.P}&potassium=${values.K}`
         `http://127.0.0.1:5000/fertilizer?cropname=${values.crop}&nitrogen=${values.N}&phosphorous=${values.P}&pottasium=${values.K}`
            )
          const kk = await okay.json()
          console.log(kk)
          setResult(kk)
        console.log(kk)
          setSubmitting(false)

         
        }}
      >
        {({ isSubmitting }) => (
          <Form className='slide-in-left'>
            <Row>
              <Col>
                <div className="form-group row p-2">
                  <label className="col-form-label">Nitrogen(N)</label>
                  <Field
                    type="number"
                    className="form-control input-bg"
                    name="N"
                  />
                </div>
              </Col>
              {/* <ErrorMessage name="email" component="div" /> */}
              <Col>
                <div className="form-group row p-2">
                  <label className="col-form-label">Phosporous(P)</label>
                  <Field
                    type="number"
                    className="form-control input-bg"
                    name="P"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group row p-2">
                  <label className="col-form-label">Potasium(K)</label>
                  <Field
                    type="number"
                    className="form-control input-bg"
                    name="K"
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group row p-2">
                  <label className="col-form-label">Crop</label>
                  <Field
                    type="String"
                    className="form-control input-bg"
                    name="crop"
                  />
                </div>
              </Col>
            </Row>
            
            {/* <ErrorMessage name="password" component="div" /> */}
            <div className="mx-auto pt-1 pb-1">
              <center>
            <button type="submit" className="p-butt" disabled={isSubmitting}>
              Submit
            </button>
              </center>
            </div>
          </Form>
        )}
      </Formik>
    </Row>
    <div className="mx-auto pt-4 pb-1">
              <center>
              

              </center>
            </div>
  </Card>
  )
}

export default FertilizerRecommendation