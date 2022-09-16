const LocalDB = window.localStorage;

const isUserLoggedIn = (): boolean => {
    return !!LocalDB.getItem("userId");
}

const addUserToLocalDB = (id: string) => {
    LocalDB.setItem("userId", id);
}

const removeUserFromLocalDB = () => {
    LocalDB.removeItem("userId");
}

const AuthService = {
    isUserLoggedIn,
    addUserToLocalDB,
    removeUserFromLocalDB
}

export default AuthService;