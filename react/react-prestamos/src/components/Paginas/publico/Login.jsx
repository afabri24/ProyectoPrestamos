// import { useState } from "react"

import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import { useForm } from "./provicional/useForm";

export default function Login() {

    // let history = useHistory();

    // const {email, password, onInputChange, onResetForm } = 
    //     useForm ({
    //         email: '',
    //         password: '',
    // });

    // const onLogin = (e) => {
    //     e.preventDefault()
    //     history.push('/Home', {
    //         replace: true,
    //         state: {
    //             logged: true,
    //             email: email,
    //         },
    //     });

    //     onResetForm();
    // }

    // const [email, setEmail] = useState();
    // const [Pass, setPass] = useState();
    
    // console.log(email);

    // const handleEmail = (event) => {
    //     setEmail(event.target.value)
    //     // onInputChange(event, 'email');
    //     console.log(email);
    // }

    // const handlePass = (event) => {
    //     setPass(event.target.value);
    //     // onInputChange(event, 'password');
    //     console.log(Pass);
    // }


    return (
        <>

        <form>
            <h2>Pagina Login (public)</h2>

            <div>
            <label htmlFor='email'>Email: </label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    required
                    autoComplete='off' 
                />
            </div>

            <div>
            <label htmlFor='Password'>Contraseña: </label>
                <input 
                    type="password"
                    name="Password"
                    id="Password"

                    required
                    autoComplete='off' 
                />
                
            </div>

            <button>Entrar</button>

            <Link to={"/Registro"}><button>Registro</button></Link>


        </form>
        </>
    );

}





// export default function Login() {
//     return (
//         <>
//             <h2>Pagina Login (public)</h2>
//         </>
//     );
        
// }
