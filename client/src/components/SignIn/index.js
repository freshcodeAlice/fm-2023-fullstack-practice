import {Formik, Form, Field} from 'formik';
import {signIn} from '../../api/index';
import styles from '../../pages/Home/Home.module.css';

function SignIn() {

    const initialValues = {
        email: '',
        password: ''
    }
    const submitHandler = (values, actions) => {
        signIn(values)
        .then(({data: {data}}) => console.log(data));
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
        >
            {(formikProps) => (
                <Form className={styles['form']}>
                    <Field name="email" placeholder="Type your email" />
                    <Field name="password" placeholder="Type your pass" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}


export default SignIn;