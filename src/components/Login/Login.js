import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import github from '../../images/login/github.png';
import google from '../../images/login/google.png';

const Login = () => {
    const { signInWithGoogle, signInWithGithub, getName, getEmail, getPassword, handleSignUp, togaleLoginToRegister, isLogin, setUser, setError, setLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    let redirect = location.state?.from || '/';

    const googleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect);
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            }).finally(
                setLoading(false)
            );
    }
    const githubLogin = () => {
        signInWithGithub()
            .then((result) => {
                history.push(redirect);
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            }).finally(
                setLoading(false)
            );
    }

    return (
        <div className="text-center my-4">
            <h2>Please {isLogin ? 'Login' : 'Register'}</h2>
            <p className="text-danger text-center"></p>
            <div className="w-25 mx-auto">
                <Form onSubmit={handleSignUp}>
                    <p className="text-danger">{error}</p>
                    {
                        !isLogin && <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    Your Name
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <FormControl
                                        onBlur={getName}
                                        type="text"
                                        autoComplete="current-name"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    }
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl
                                    onBlur={getEmail}
                                    type="email"
                                    autoComplete="current-email"
                                    id="email"
                                    placeholder="Enter your email address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl
                                    onBlur={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <button type="submit" className="btn btn-custome mt-2 py-2 w-100">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    {/* <input type="submit" value="Submit" className="btn btn-custome mt-2 py-2 w-100" /> */}
                    {/* <button type="submit" className="btn btn-custome mt-2 py-2 w-100">
                        Login
                    </button> */}
                </Form>

                <p className="mt-2">
                    <input onChange={togaleLoginToRegister} className="form-check-input" type="checkbox" id="gridCheck1" />Already registered?
                </p>
                <p className="mt-3">Or</p>
                <hr className="w-25 mx-auto" />
                <p> Sign in with</p>
                <div>
                    <button
                        onClick={googleLogin}
                        className="btn btn-light mt-3 w-100 border border-secondary"
                    >
                        <img
                            width="26px"
                            src={google}
                            alt="github-icon"
                        /> Sign in with Google
                    </button>

                    <button onClick={githubLogin} className="btn btn-light mt-3 w-100 border border-secondary">
                        <img
                            width="26px"
                            src={github}
                            alt="github-icon"
                        />Sign in with github
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Login;