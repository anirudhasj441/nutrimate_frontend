interface IUserData {
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    birth_date: string,
    height: number,
    weight: number,
    goal: string,
    password?: string
}

interface IUserProvider {
    children: React.ReactNode;
}

interface IUser {
    checked: boolean,
    isAuthenticated: boolean,
    userData: IUserData | null,
    authenticate: () => Promise<boolean>,
    login: ( username: string, password: string) => Promise<IUserData | null >,
    logout: () => void,
    signup: ( userData: IUserData ) => Promise<boolean>
}

export type { IUserData, IUserProvider, IUser };