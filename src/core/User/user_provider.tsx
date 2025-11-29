/**
 * @file context.ts
 *
 * @brief Provides the user context for managing user-related data across the application.
 *
 * @details This file exports a React context for managing a `User` instance. It is used to provide
 *          user-related data and methods throughout the component tree.
 *
 * @module UserContext
 *
 * @example
 * // Importing and using the user context
 * import userContext from './User/context';
 *
 * // In a functional component
 * const user = useContext(userContext);
 *
 * @see {@link User} for the user class definition.
 *
 * @author Anirudha Jadhav <anirudhasj441@gmail.com>
 */

import { createContext, useEffect, useRef, useState } from "react";
import User from ".";
import type { IUser, IUserData, IUserProvider } from "./types";

/**
 * @constant userContext
 * @brief React context for managing user data.
 * @details The `userContext` provides access to a `User` instance across the component tree.
 *          It is initialized with a new instance of the `User` class.
 * @type {React.Context<User>}
 *
 * @example
 * // Example usage in a functional component
 * const user = useContext(userContext);
 */

const defaultUserContext: IUser = {
  isAuthenticated: false,
  userData: null,
  authenticate: async () => { return false },
  login: async (_username: string, _password: string ): Promise<IUserData | null > => { return null },
  signup: async ( _userData: IUserData ): Promise<boolean> => { return false },
  logout: async () => {},
};

const userContext = createContext<IUser>(defaultUserContext);

const UserProvider: React.FC<IUserProvider> = ( props: IUserProvider ) => {
    const userRef = useRef<User | null>(null);
    if (userRef.current === null) {
        userRef.current = new User();
    }
    const user = userRef.current;

    const [isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);
    const [userData, setUserData] = useState< IUserData | null >(null);

    const authenticate = async (): Promise<boolean> => {
        const res = await user.checkUserAuthenticated();

        setIsAuthenticated( user.isAuthenticated );
        if(res) {
            setUserData(user.userData);
        }

        return res;
    }

    const login = async ( username: string, password: string ): Promise<IUserData | null> => {
        const res = await user.login( username, password );
        setIsAuthenticated( user.isAuthenticated );
        if(res){
            setUserData( user.userData );
            return user.userData;
        }
        return null;
    }

    const signup = async ( aUserData: IUserData ): Promise<boolean> => {
        const res = await user.signup( aUserData );
        setIsAuthenticated( user.isAuthenticated );
        if( res ){
            setUserData( user.userData );
        }

        return res;
    }

    const logout = () => {
        user.logout();
        setIsAuthenticated( user.isAuthenticated );
        setUserData( null );
    }

    useEffect(() => {
        authenticate().then((res)=>{
            console.log( "authenticated: ", res );
            setIsAuthenticated( user.isAuthenticated );
            console.log( user.userData )
            if( res ){
                setUserData( user.userData )
            }
        })
    }, [])

    return (
        <userContext.Provider value={{
            isAuthenticated,
            userData,
            authenticate,
            login,
            logout,
            signup
        }}>
            {props.children}
        </userContext.Provider>
    );

}

export {userContext, UserProvider};