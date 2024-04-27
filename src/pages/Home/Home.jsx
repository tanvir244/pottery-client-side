import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";
import CraftItems from "../CraftItems/CraftItems";
import ArtAndCraft from "../ArtAndCraft/ArtAndCraft";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <ArtAndCraft></ArtAndCraft>
            <Footer></Footer>
        </div>
    );
};

export default Home;