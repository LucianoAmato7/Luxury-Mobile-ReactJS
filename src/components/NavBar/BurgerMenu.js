import '../../styles/BurgerMenu.css'

const BurgerMenu = ( {clicked, handleClick} ) => {

    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
        icon.addEventListener('click', (event) => {
            icon.classList.toggle("open");
        });
    }); 


    return(
        <div className='burger'>
            <div 
                onClick={ handleClick } 
                className={`icon nav-icon-5 burger ${ clicked ? 'open' : '' }`}
            >
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
    )
}

export default BurgerMenu