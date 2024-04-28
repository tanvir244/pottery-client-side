import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import MyArtCraftItem from "../MyArtCraftItem/MyArtCraftItem";

const MyArtCraftList = () => {
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
            <div className="py-12 md:py-16 space-y-4">
                {
                    myItems.map(item => <MyArtCraftItem
                    key={item._id}
                    item={item}
                    myItems={myItems}
                    setMyItems={setMyItems}
                    ></MyArtCraftItem>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyArtCraftList;