
import './App.css'
import { TwitterCard } from './TwitterFollowCard'
import { TwitterPostCard } from './TwitterPostCard'

export function App(){
    const users = [
        {
            userName    : 'midudev',
            name        : 'Migue Angel Duran',
            isFollowing : false
        },
        {
            userName    :'dase',
            name        :'Dase Zero',
            isFollowing : true
        },
        {
            userName    :'Pedro',
            name        :'Pedor Zero',
            isFollowing : true
        },
    ]

    const post = [
        {
            nameTw   :  'Pedro',
            userName :  'Pedor Zero',
            content  :  'Mi primer video ',
            liked    :   false,
            retw     :   true
            
        },
        {
            nameTw   :  'evilafm',
            userName :  'Alexelcapo',
            content  :  'Nuevo video de DS3',
            liked    :   true,
            retw     :   false
        },
    ]
    
    // para pasar variables como boleans, arrays, etc en el elemento tendremos que poner {}
    return(
        <>
            <h1 style={{color:"white"}}>Twitter Fan</h1>
            <section className='twitter_contentPostCard'>
                {
                    post.map(({nameTw,content,userName,liked, retw})=>{
                        return(
                            <TwitterPostCard key={nameTw} nameTw={nameTw} content={content} liked={liked} retw={retw}>
                                {userName}
                            </TwitterPostCard>
                        )
                    })
                }                
            </section>
            
            <section className='twitter_contentFollowCard'>
                <h3 style={{color:"white"}}>A quien seguri</h3>
                {
                    users.map(({userName, name, isFollowing}) =>{
                    
                        return(
                            <TwitterCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                                {name}
                            </TwitterCard>
                        )
                    })
                }
                <span style={{color:'white',opacity:'1'}}>Ver más</span>
            </section>
        </>
    )
}