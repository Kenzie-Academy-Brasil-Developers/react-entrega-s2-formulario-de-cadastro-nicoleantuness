import { UserProvider } from "./users";

const Providers = ({ children }) =>{
    return(
        <UserProvider>
            { children }
        </UserProvider>
    )
}

export default Providers