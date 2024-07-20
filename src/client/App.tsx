import "./App.css";
import {useEffect} from "react";
import axios from "axios"
import Navbar from "./components/Navbar";

function App() {

    const getUsers = async () => {
        const res = await axios.get("/api/users")
        console.log(res)
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="h-screen bg-amber-100">
            <Navbar/>
        </div>
    );
}

export default App;
