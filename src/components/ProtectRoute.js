import { useAuth } from "../Auth";
import { Navigate,Outlet } from 'react-router-dom';


/**
 * @link [https://ui.dev/react-router-programmatically-navigate]
 */

const ProtectedRoute = ({children}) => {
    const { token } = useAuth();
    if (!token){
        return <Navigate to="/" replace />;
    }
    return <Outlet />
};

export default ProtectedRoute