import { UserProvider } from "./users";
interface Children {
    children: React.ReactNode;
}
const Providers = ({ children } : Children) =>{
    return(
        <UserProvider>
            { children }
        </UserProvider>
    )
}

export default Providers