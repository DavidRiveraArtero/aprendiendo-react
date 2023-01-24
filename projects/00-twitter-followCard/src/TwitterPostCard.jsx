import { useState } from "react"

export function TwitterPostCard({nameTw,children,content, liked, retw}){
    
    const SrcImg = `https://unavatar.io/${nameTw}`
    
    
    const [isLiked, setIsLiked] = useState(liked)
    const [numMegusta, setNumMeGusta] = useState(!isLiked ? 0 : 1)

    const [numRetw, setNumRetw] = useState(!retw ? 0 : 1)
    const [isRetw, setIsRetw] = useState(retw)

    const like = () =>{
        setIsLiked(!isLiked)    
        isLiked ? setNumMeGusta(numMegusta - 1) : setNumMeGusta(numMegusta + 1)
    }

    const button_retw = () => {
        setIsRetw(!isRetw)
        isRetw ? setNumRetw(numRetw - 1) : setNumRetw(numRetw + 1)
    }

    return(
        <>
            <div className="tw-postCard">
                <header className="tw-postCard-header">
                    <img className="tw-followCard-avatar" src={SrcImg}/>
                    <div className='tw-postCard-info'>
                        <strong>{children}</strong>
                        <span>@{nameTw}</span>
                    </div>
                    
                </header>
                <div className="tw-postCard-content">
                    <p>{content}</p>
                    
                    <img src={SrcImg}/>
                   
                    <div className="tw-postCard-buttons ">
                        <button onClick={like} className="tw-postCard-buttonHearth tw-postCard-buttons-noStyle">
                            <span className="button-txt-heart">{numMegusta}</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-heart-fill button-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </button>
                        <button onClick={button_retw} className="tw-postCard-buttons-noStyle">
                            <span className="button-txt-retwet">{numRetw}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-skip-backward button-retwet" viewBox="0 0 16 16">
                                <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm7 1.133L1.696 8 7.5 11.367V4.633zm7.5 0L9.196 8 15 11.367V4.633z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )

}