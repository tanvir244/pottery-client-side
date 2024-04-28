// import { useContext, useEffect, useState } from "react";
import { useContext } from "react";
import CraftItem from "../CraftItem/CraftItem";
import PropTypes from "prop-types";
import { AuthContext } from "../../provider/AuthProvider";
// import { AuthContext } from "../../provider/AuthProvider";

const CraftItems = ({ myItems }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div>
                <p className="text-lg text-center">Loading Spinner going on until login user. So, please login !</p>
                <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-4xl font-bold text-center my-8">Craft Items</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    myItems.slice(0, 6).map(item => <CraftItem
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
    myItems: PropTypes.array.isRequired
}