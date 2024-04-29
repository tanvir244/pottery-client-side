
const Subcategories = ({ subcategory }) => {
    const { _id, subcategory_name, description, image } = subcategory;

    return (
        <div className="card bg-base-100 shadow-xl w-full h-[230px] mb-5 image-full">
            <figure><img className="w-full" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{subcategory_name}</h2>
                {
                    description.length > 120
                        ? <p>{description.slice(0, 120)}.....</p>
                        : <p>{description}</p>
                }
                <div className="card-actions justify-end mt-4">
                    <button className="btn bg-amber-500 text-white border-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Subcategories;