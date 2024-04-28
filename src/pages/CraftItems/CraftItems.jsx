import CraftItem from "../CraftItem/CraftItem";
import PropTypes from "prop-types";

const CraftItems = ({ craftItems }) => {

    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-4xl font-bold text-center my-8">Craft Items</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    craftItems.map(item => <CraftItem
                    key={item._id}
                    item={item}
                    ></CraftItem>)
                }
            </div>
        </div>
    );
};

export default CraftItems;

CraftItems.propTypes = {
    craftItems: PropTypes.array.isRequired
}