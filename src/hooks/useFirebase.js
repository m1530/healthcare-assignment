import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationApp from "../firebase/firebase.init";

initializationApp();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () => {
        setLoading(true);
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const suscribeeUser = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return suscribeeUser;
    }, []);

    const togaleLoginToRegister = e => {
        setIsLogin(e.target.checked);
    }

    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getPassword = e => {
        setPassword(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (isLogin) {
            signInWithEmail(email, password);
        }
        else {
            newUserRegister(email, password);
        }
    }
    const newUserRegister = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                verifyEmail();
                updateUserName();
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
            setError(error.message);
        });
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
            })
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
        }).finally(
            setLoading(false)
        );
    }
    return {
        signInWithGoogle, logOut, user, error, signInWithGithub, getName, getEmail, getPassword, handleSignUp, signInWithEmail, isLogin, togaleLoginToRegister, loading, setError, setLoading, setUser
    }
}
export default useFirebase;