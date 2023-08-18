
import LoginForm from "./LoginForm"
const Login = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="mx-auto w-81 pt-22 pb-22 overflow-auto">
                <h1 style={{ fontSize: '13vw' }} className="mx-auto w-69 font-semibold text-lightCoral" >Where To</h1>
            </div>
            <LoginForm/>
            <div name="slideUpContainer" className="flex-grow bg-lightCoral"></div>
        </div>
       );
}

export default Login