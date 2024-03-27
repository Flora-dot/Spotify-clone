import { isUserLogin } from "../../utils/user";

export const IsProtectedRoute = ({children}) => {
    const user = isUserLogin();
    // Make API call with user id.
    if(user) {
        return children;
    }
    window.location.href = '/login'
    return null;
}