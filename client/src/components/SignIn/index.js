import {Formik, Form, Field} from 'formik';

function SignIn() {

    const initialValues = {
        email: '',
        password: ''
    }
    const submitHandler = (values, actions) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
        >
            {(formikProps) => (
                <Form>
                    <Field name="email" placeholder="Type your email" />
                    <Field name="password" placeholder="Type your pass" />
                </Form>
            )}
        </Formik>
    )
}


export default SignIn;