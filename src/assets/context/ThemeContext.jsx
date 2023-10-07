//context/ThemeContext.jsx
import { createContext } from "react"

//create the context
const ThemeContext = createContext()

//Provider function that will wrap your tree with the context and provide the values given in the props.
const ThemeProvider = ({children})=>{
    //use state to create the state
    const [ theme, setTheme ] = useState('light')

    //create a function that will update the state
    const handleThemeChange = ()=>{
        setTeheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        //return the provider with the value prop that contains the state and the function that will update the state
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeProvider,
    ThemeContext
}