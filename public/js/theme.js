function setTheme(darkMode) 
{
    const body = document.querySelector('body')

    if(darkMode) 
    {
        body?.classList.add('dark')
    }
    else 
    {
        body?.classList.remove('dark')
    }

    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
}

function loadTheme() 
{
    const mode = localStorage.getItem('theme')
    if (mode == false) 
    {
        setTheme(true)
    }
    else
    {
        setTheme(mode === 'dark')
    }
}