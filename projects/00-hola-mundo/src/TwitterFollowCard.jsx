import { useState } from "react"


export function TwitterCard({userName, children, initialIsFollowing}){ // childer recupera la infomacion de dentro de la etiqueta TwitterCard del padre

    const SrcImg = `https://unavatar.io/${userName}`
    
    // BOTON 
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const followText = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    // FUNCION CAMBIAR ESTADO EL BOTON
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
        
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    alt="Avatar midudev" 
                    src={SrcImg}
                    className='tw-followCard-avatar'/>

                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                    
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className="tw-followCard-text">{followText}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}