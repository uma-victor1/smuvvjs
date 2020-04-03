const toggle = (el, eventType, className)=>{
    el.addEventListener(eventType, ()=>{
        el.classList.toggle(className);
    });
};


document.addEventListener("readystatechange", (e)=>{
    if(e.target.readyState === "interactive"){
        //Document is accessible now!
        //Run some code
	}
	if(e.target.readyState === "complete"){
        //Document is ready! 
        //Knock yourself out
        const nav = document.querySelector("nav");
        const docStyles = document.documentElement.style;
        const headerFx = ()=>{
            if(window.scrollY >= 60){
                docStyles.setProperty("--header-title-nav-height", "67px");
                docStyles.setProperty("--header-title-nav-position", "fixed");
                docStyles.setProperty("--header-title-nav-z-index", "999");
                docStyles.setProperty("--headerSideFx-color", "var(--main)");
            } else{
                docStyles.setProperty("--headerSideFx-color", "var(--bg)");
                docStyles.setProperty("--header-title-nav-position", "absolute");
                docStyles.setProperty("--header-title-nav-z-index", "0");
                docStyles.setProperty("--header-title-nav-height", "calc(50vh + 60px)");
            }        
        }

        toggle(nav, "click", "nav-is-open");
        window.addEventListener("scroll", headerFx);
	}
});