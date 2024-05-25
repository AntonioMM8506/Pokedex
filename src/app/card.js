import Footer from "./footer";

const PokemonCard = ({props}) => {

    const mainMoves = props.moves.slice(0,4);

    return(

            <div className='flex flex-col items-center justify-center'>
                
                <br/>
                <h1>{props.name}</h1>
                <br/>
                
                <p>height: {props.height}</p>
                <p>species: {props.species.name}</p>
                <p>weight: {props.weight}</p>
                
                <br/>
                <p>Abilities</p>
                {props.abilities.map((item, i) => (
                    <span key={item.ability.name}> ability {i+1} : {item.ability.name} </span>
                ))}
                
                <br/>
                <p>Types</p>
                {props.types.map((item, i) => (
                    <span key={item.type.name}> type {i+1} : {item.type.name}  </span>
                ))}

                <br/>
                <p>Base Stats</p>
                {props.stats.map((item) => (
                    <span key={item.stat.name}>{item.stat.name} : {item.base_stat}</span>
                ))}

                <br/>
                <p>Main Moves</p>
                {mainMoves.map((item, i) => (
                    <span key={item.move.name}> move {i+1} : {item.move.name}</span>
                ))}
                
                <br/>
                <br/>
            </div>


    )
}

export default PokemonCard