import { useState } from "react"

export default function Login() {
    const [user, setUser] = useState(null)

    const login = () => {
        setUser({
            id: 1,
            name: "uno"
        })
    }

    const logout = () => setUser(null)


    return (
        <>
            <h2>Pagina Login (public)</h2>

            {
                user ? (
                    <button onClick={logout}>Logout</button>
                ): (
                    <button onClick={login}>Login</button>
                )
            }
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
