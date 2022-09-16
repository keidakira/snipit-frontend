import {useEffect, useState} from "react";
import AuthService from "../../services/auth.service";

const Logout = () => {
    const [time, setTime] = useState<number>(3);

    useEffect(() => {
        let timer: NodeJS.Timer;

        if (time > 0) {
            timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else {
            AuthService.removeUserFromLocalDB();
            window.location.assign("/");
        }

        return () => {
            clearInterval(timer);
        }
    }, [time]);

    return (
        <div style={{padding: 16, textAlign: "center"}}>
            <p>You have been logged out. You will be redirected to login page in {time} second(s)</p>
        </div>
    )
}

export default Logout;