import useAuth from "../../hooks/useAuth";
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;