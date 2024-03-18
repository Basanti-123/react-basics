import {useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext';

export const Theme=() => {
 const {theme, toggleTheme} = useContext(ThemeContext);
    return (
    <>
      I am Theme  Currently i have {theme} theme enabled

      <br />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}


