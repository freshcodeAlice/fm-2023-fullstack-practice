import {Formik, Form, Field} from 'formik';
import styles from '../../pages/Home/Home.module.css';
import {loginUserRequest} from '../../actions/actionCreators';

function SignIn(props) {

    const initialValues = {
        email: '',
        password: ''
    }
    const submitHandler = (values, actions) => {
      props.loginUserRequest(values);
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


export default connect(null, {
    loginUserRequest
})(SignIn);