import {Formik, Form, Field} from 'formik';
import {signUp} from '../../api/index';
import {format} from 'date-fns';

function SignUp() {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: format(new Date(), 'yyyy-MM-dd')
    }
    const submitHandler = (values, actions) => {
        signUp()
        .then(({data: {data}}) => console.log(data));
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
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}


export default SignUp;