import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import Loged from './Loged';

// class Navbar extends Component {

//     // contextType menentukan context mana yang dipakai
//     // static contextType = ThemeContext

//     render() {
//         // dan akan menghasilkan sebuag object bernama context
//         // console.log('context => ', this.context);

//         // ini akan membuat sebuah variable baru sesuai dengan
//         // yang ada di state file ThemeCOntext
//         // const { isLightTheme, light, dark, user } = this.context

//         // kita buat sebuah variable baru bernama theme
//         // jika LightTheme true dan false
//         // const theme = isLightTheme ? light : dark
//         // variable theme akan berubah menjadi light atau dark
//         // tergantung true atau falsenya

//         return (

//             <AuthContext.Consumer>{(authContext) => (

//                 <ThemeContext.Consumer>{(themeContext) => {

//                     const { isLightTheme, light, dark } = themeContext
//                     const theme = isLightTheme ? light : dark
//                     const { isAuthenticated, toggleAuth } = authContext

//                     return (
//                         <nav style={{
//                             // bisa kita gunakan untuk display
//                             background: theme.ui,
//                             color: theme.syntax,

//                         }}>
//                             <h1>Context App</h1>
//                             <div onClick={toggleAuth}>
//                                 {isAuthenticated ? 'loged in' : 'loged Out'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>

//                             {/* <Loged /> */}
//                         </nav>
//                     )
//                 }}
//                 </ThemeContext.Consumer>
//             )}


//             </AuthContext.Consumer>


//         );
//     }
// }

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const theme = isLightTheme ? light : dark
    return (
        <nav style={{
            // bisa kita gunakan untuk display
            background: theme.ui,
            color: theme.syntax,

        }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'loged in' : 'loged Out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            {/* <Loged /> */}
        </nav>
    );
}

export default Navbar;