import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";
import CraftItems from "../CraftItems/CraftItems";
import ArtAndCraft from "../ArtAndCraft/ArtAndCraft";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
    const { user } = useContext(AuthContext);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myItems/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyItems(data);
                    console.log(data);
                })
        }
    }, [user]);

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <CraftItems
                myItems={myItems}
            ></CraftItems>
            <ArtAndCraft></ArtAndCraft>
            <Footer></Footer>
        </div>
    );
};

export default Home;