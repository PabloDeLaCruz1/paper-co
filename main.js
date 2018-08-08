document.getElementById('theme-button').onclick = function () {
    let theme = document.getElementById('theme-css');
    console.log(theme, "hiii");
    
    if (theme === "main.css") {
        theme = "main-alt.css";
    } else {
        theme = "main.css";
    }
};