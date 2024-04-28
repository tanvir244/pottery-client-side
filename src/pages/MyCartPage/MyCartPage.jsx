import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyCartPage = () => {
    const { user, loading } = useContext(AuthContext);
    
    if(loading){
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>;
    }

    const handleButton = e => {
        e.preventDefault();

        fetch(`http://localhost:5000/myProduct/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    console.log(user.email); 

    return (
        <div>
            <h1 className="text-5xl text-center">This is my cart page</h1>
            <button onClick={handleButton} className="btn btn-lg">Click</button>
        </div>
    );
};

export default MyCartPage;