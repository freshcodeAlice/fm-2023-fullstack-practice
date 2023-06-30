import {Formik, Form, Field} from 'formik';

function SignUp() {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: new Date()
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
                    <Field name="firstName" placeholder="Type your firstName" />
                    <Field name="lastName" placeholder="Type your lastName" />
                    <Field name="email" placeholder="Type your email" />
                    <Field name="password" placeholder="Type your pass" />
                    <Field name="birthday" placeholder="Type your email" type="date"/>

                </Form>
            )}
        </Formik>
    )
}


export default SignUp;