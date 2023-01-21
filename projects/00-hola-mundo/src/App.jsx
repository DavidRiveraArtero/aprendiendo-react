
import './App.css'
import { TwitterCard } from './TwitterFollowCard'

export function App(){
    const users = [
        {
            userName:    'midudev',
            name:        'Migue Angel Duran',
            isFollowing: false
        },
        {
            userName:    'dase',
            name:        'Dase Zero',
            isFollowing: true
        },
        {
            userName:    'Pedro',
            name:        'Pedor Zero',
            isFollowing: true
        },
    ]
    
    // para pasar variables como boleans, arrays, etc en el elemento tendremos que poner {}
    return(
      
        <section className='App'>
           {
            users.map(({userName, name, isFollowing}) =>{
               
                return(
                    <TwitterCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterCard>
                )
            })
           }
        </section>
    )
}