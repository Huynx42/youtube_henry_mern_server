import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
        <Form className="my-4">
            <Form.Group>
                <Form.Control type='text' placeholder='username' name='username' required />
            </Form.Group>
            <Form.Group className='mt-2'>
                <Form.Control type='password' placeholder='password' name='password' required />
            </Form.Group>
            <Button className='mt-2' variant='success' type='submit'>Login</Button>
        </Form>
        <p>Don't have an acoount?
        <Link to='/register'>
            <Button variant='info' size='sm' className='ml-2'>Register</Button>
        </Link>
        </p>
        </>
    )
}

export default LoginForm;