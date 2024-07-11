import { useEffect, useState } from "react";
import "../styles/body.css";
// const getUserInfo = async () => {
//     const users = await fetch('https://dummyjson.com/users');
//     return users;
// };

const Body = () => {
    const [usersInfo, setUserInfo] = useState([]);
    useEffect(() => {
        const getUserInfo = () => {
            fetch('https://dummyjson.com/users').then((res) => {
                return res.json();
            }).then((res1) => {
                console.log(res1);
                setUserInfo(res1.users);
                return res1;
            }).catch((err) => {
                console.log(err);
            });
        };
        getUserInfo();

    }, []);

    console.log(usersInfo);
    return (
        <>
            <div className="body">
                <section className="leftNav">Left Nav</section>
                <section className="container">

                    {usersInfo.map((user) => {
                        return (
                            <>
                                <div className="image" key={user.id}>
                                    <img src={user.image} alt="" />
                                </div>
                                <div className="userInfo">
                                    <p>{user.firstName}</p>
                                    <p>{user.lastName}</p>
                                    <p>{user.company.department}</p>
                                </div>
                            </>
                        );
                    })}
                </section>
            </div>
        </>
    );
};

export default Body;
