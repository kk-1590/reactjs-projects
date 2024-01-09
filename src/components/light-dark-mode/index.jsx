import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {

    const [theme,setTheme] = useLocalStorage('theme',"dark");

  return (
    <div className="light-dark-mode">
        <div className="container">
            <p>Hello World!</p>
            <button>Change Theme</button>
        </div>
    </div>
  )
}

export default LightDarkMode;