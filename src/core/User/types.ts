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

export type {IUserData};