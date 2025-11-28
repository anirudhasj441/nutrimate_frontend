import type { IUserData } from "./types";

class User{
    private baseUrl: string = import.meta.env.VITE_BACKEND_URL ?? 
            "http://127.0.0.1";

    private accessToken = sessionStorage.getItem( "access_token" );

    private mIsAuthenticated = false

    private mUserData: IUserData | null = null;

    public constructor() {
        // this.mUserData = null


    }

    public get userData(): IUserData | null {
        return this.mUserData;
    }

    public get isAuthenticated(): boolean {
        return this.mIsAuthenticated;
    }
    
    /**
     * @method checkUserAuthenticated
     * @async
     * @brief Checks if the user is authenticated by verifying the access token.
     * @returns {Promise<boolean>} Returns `true` if the user is authenticated, otherwise `false`.
     */
    public checkUserAuthenticated = async (): Promise<boolean> => {
        const url = this.baseUrl + "/auth/get_user";

        try {
            if (this.accessToken === null) return false;

            const res = await fetch(url, {
                headers: {
                    Authorization: "Bearer " + this.accessToken,
                },
            });

            if (!res.ok) throw new Error("User is not authenticated");

            // const response = await res.json();

            this.mIsAuthenticated = true;
            return true;
        } catch (error) {
            console.error("Error during authentication check:", error);
            this.mIsAuthenticated = false;
            return false;
        }
    };

    /**
     * @method login
     * @async
     * @brief Logs in the user by sending credentials to the server and storing the access token.
     * @param username - The username of the user.
     * @param password - The password of the user.
     * @returns {Promise<boolean>} Returns `true` if login is successful, otherwise `false`.
     */
    public login = async (
        username: string,
        password: string,
    ): Promise<boolean> => {
        const url = this.baseUrl + "/auth/login";

        const data = {
            username: username,
            password: password,
        };

        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) throw new Error("Login failed");

            const response = await res.json();

            sessionStorage.setItem("access_token", response.access);
            this.accessToken = response.access;

            this.mUserData = {
                ...response.user
            }

            this.mIsAuthenticated = true;

            return true;
        } catch (error) {
            console.error("Error during login:", error);
            return false;
        }
    };

    /**
     * @method logout
     * @brief Logs out the user by removing the access token and updating authentication status.
     */
    public logout = () => {
        sessionStorage.removeItem("access_token");
        this.accessToken = null;
        this.mIsAuthenticated = false;
    };

    /**
     * @method signup
     * @async
     * @brief Signs up a new user by sending user data to the server.
     * @param data - The user data for signup.
     * @returns {Promise<boolean>} Returns `true` if signup is successful, otherwise `false`.
     */
    public signup = async (data: IUserData): Promise<boolean> => {
        const url = this.baseUrl + "/auth/signup";

        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) throw new Error("Signup failed");

            return true;
        } catch (error) {
            console.error("Error during signup:", error);
            return false;
        }
    };
}

export default User;