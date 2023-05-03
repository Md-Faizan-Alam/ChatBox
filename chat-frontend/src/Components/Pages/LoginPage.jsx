import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [name,setName] = useState("");

    const handleName = (event)=>{
        setName(event.target.value)
    }

    const handleJoin = ()=>{
        if(name === "" || name.includes(' ')) return;
        props.setUsername(name);
        navigate("/chat")
    }

    return (
        <div className="container-fluid bg-chat min-vh-100 px-3 pt-5">
            <div className="container bg-dark py-4 login-block text-center rounded-3 mt-5">
                <div className="row m-0 mb-3">
                    <div className="col text-light fw-semibold fs-lg">
                        Login
                    </div>
                </div>
                <div className="row px-2">
                    <input
                        type="text"
                        value={name}
                        onChange={handleName}
                        className="rounded-2 border-0 outline-0 w-75 m-auto px-2 py-1"
                    />
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <button className="btn btn-danger py-1 px-3 fs-5" onClick={handleJoin}>
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
