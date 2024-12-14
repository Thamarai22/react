import React from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode]= React.useState(false);
    function toggleTheme()
{
    setIsDarkMode(!isDarkMode);
}
  return (
    <div style={{backgroundColor: isDarkMode ? "black":"White",color:isDarkMode ? "white":"black",padding:"20px"}}>
<p>{isDarkMode ?"Dark Mode":"Light Mode"}</p>
<button onClick={toggleTheme}>Toogle Theme</button>      
    </div>
  )
}

export default ThemeToggle
