import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";
import CraftItems from "../CraftItems/CraftItems";
import ArtAndCraft from "../ArtAndCraft/ArtAndCraft";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const craftItems = useLoaderData();
    
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <CraftItems craftItems={craftItems}></CraftItems>
            <ArtAndCraft></ArtAndCraft>
            <Footer></Footer>
        </div>
    );
};

export default Home;