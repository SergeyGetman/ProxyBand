import React, {useEffect, useState} from 'react';
import MainContainer from "./MainContainer";

const Instagramm = () => {


    const userId = "1732165650599538"
    const accessToken = "91add2bc7ecb34905dc9f670fdad3350"
     const apiUrl = `https://graph.instagram.com/v12.0/${userId}/followers?access_token=${accessToken}`;

    const url = "https://www.instagram.com/api/v1/users/web_profile_info/?username=sergey_getman1\n"



    const storage = localStorage;
    console.log("storage", storage)


    const [userData, setUserData] = useState({})

    console.log("userData", userData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                console.log(data);
                const followers = data.data;
                setUserData(followers);
            } catch (error) {
                console.error('Error fetching followers:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <MainContainer>
                <h1>Hi instagramm</h1>
        </MainContainer>
    );
};

export default Instagramm;