import {useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import FormComponent from "./FormComponent";
import Cookies from "js-cookie";


export default function LoginPage() {
    // states 
    const [formData, setFormData] = useState({username: "", password: ""});
    const [postResponse, setPostResponse] = useState("");

    // navigate
    const navigate = useNavigate();

    // handlers 

    const handleOnChange = (e) => {
        setFormData((prevData) => {
            return {...prevData, [e.target.name]: e.target.value};
        });
    };

    const handleLogin = async () => {
        try{
            const response = await axios.post("http://localhost:3000/login", {
                ...formData,
            });
            setPostResponse(response.data.message);
            if (response.status === 201) {
                navigate("/Contacts", {state: formData});
                Cookies.set("jwt-authorization", response.data.token);

            }
        } catch (error) {

            setPostResponse(error?.response?.message || "Login failed!");
        }
    };

    const handleOnSubmit = (e) => {

        e.preventDefault();
        handleLogin();
        setFormData({ username: "", password: ""});
    };



    return (
        <div>
            <FormComponent 
        formData={formData}
        postResponse={postResponse}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        nextPage="register"
        currentPage="login"
        />
        </div>
    )
}