import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const AddCraftItems = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#f0bc8c] py-28">

                <div className="w-[70%] mx-auto shadow-2xl bg-base-100 rounded-2xl">
                    <h2 className="text-4xl font-bold text-center pt-12">Add Craft Items</h2>
                    <form className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Item Name</span>
                                </label>
                                <input type="text" placeholder="Enter item's name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Subcategory Name</span>
                                </label>
                                <input type="text" placeholder="Enter subcategory name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Short Description</span>
                                </label>
                                <input type="text" placeholder="Enter short description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Price</span>
                                </label>
                                <input type="text" placeholder="Enter price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Rating</span>
                                </label>
                                <input type="text" placeholder="Enter rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Customization</span>
                                </label>
                                <input type="text" placeholder="Enter Yes/No" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Processing Time</span>
                                </label>
                                <input type="text" placeholder="Enter processing time" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Stock Status</span>
                                </label>
                                <input type="text" placeholder="Enter In stock/Made to order" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">User Name</span>
                                </label>
                                <input type="text" placeholder="Enter user name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">User Email</span>
                                </label>
                                <input type="text" placeholder="Enter user email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter only photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-800 text-white text-lg">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCraftItems;