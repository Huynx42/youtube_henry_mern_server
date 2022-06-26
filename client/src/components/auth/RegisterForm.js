import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

const RegisterForm = () => {
    return (
        <>
        <Form className="my-4">
            <Form.Group>
                <Form.Control type='text' placeholder='username' name='username' required />
            </Form.Group>
            <Form.Group className='mt-2'>
                <Form.Control type='password' placeholder='password' name='password' required />
            </Form.Group>
            <Form.Group className='mt-2'>
                <Form.Control type='password' placeholder='Confirm password' name='confirmPassword' required />
            </Form.Group>
            <Button className='mt-2' variant='success' type='submit'>Register</Button>
        </Form>
        <p>Already have an account?
        <Link to='/login'>
            <Button variant='info' size='sm' className='ml-2'>Login</Button>
        </Link>
        </p>
        </>
    )
}

export default RegisterForm;