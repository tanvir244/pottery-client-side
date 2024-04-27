import { FaStar } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";

const CraftItems = () => {
    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-4xl font-bold text-center my-8">Craft Items</h2>
            <div className="grid grid-cols-3 gap-6">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[242px] object-cover" src="https://i.ibb.co/C0yCBxb/Ceramics-and-Pottery-12.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-8">
                            <h1><span className="font-bold text-base">Stock:</span> Made to Order</h1>
                            <h1 className="flex items-center gap-2 text-base font-bold"><span className="text-cyan-700 font-bold text-xl"><FaStar /></span> 4.8</h1>
                        </div>
                        <h2 className="card-title font-bold mt-2">Handy Craft</h2>
                        <p>Short description add here, please. short description add here please.</p>

                        <div className="flex justify-between mt-4">
                            <h3 className="flex items-center gap-2 text-2xl font-bold text-red-500"><span className="text-3xl"><BiSolidDollarCircle /></span> 500</h3>
                            <div className="card-actions">
                                <button className="btn bg-cyan-700 text-white">View Details</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/C0yCBxb/Ceramics-and-Pottery-12.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItems;