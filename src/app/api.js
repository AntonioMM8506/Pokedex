"use client"
import React, {useState, useEffect, useMemo } from 'react';
import pokedexHead from "../../public/media/pokedex.png";
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PokemonCard from './card';
import './globals.css';

const FetchAPI = () => {
    const [kantoData, setKantoData] = useState(null);
    const [pokemon, setPokemon] = useState('');
    const [error, setError] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    //Retrieve all the pokemons from the Kanto region
    useEffect(() => {
        const fetchKantoData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
                if (!response.ok) { 
                    throw new Error('Network response was not ok'); 
                }
                    
                const jsonData = await response.json();
                setKantoData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        };
            fetchKantoData();
    }, []);//End of useMemo
    

    async function handleSubmit(event){
        event.preventDefault();

        if (!pokemon) {
            setError('Pokemon name is required');
            return;
        } else if(pokemon.length < 3){
            setError('Pokemon name should be at least 3 characters long');
        } else{
            const data = {
                pokemon: String(event.target.pokemon.value)
            }

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.pokemon}`);
            if (!response.ok) { 
                setError('Pokemon does not exist');
            }

            const pokemonFound = await response.json();
            setPokemonData(pokemonFound);
            console.log(pokemonFound);
            setError(null);
            if(!kantoData.results.find(p => p.name == pokemonFound.name)){
                setError('Pokemon does not exist');
                setPokemonData(null);
            }
        }        
    };//End of handleSubmit


    const handleReset = () => {
        setPokemon('');
        setError('');
        setPokemonData(null);
    };//End of handleReset
    


    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold text-3xl">Kanto Pokedex</h1>
                <Image 
                    src={pokedexHead} 
                    alt="pokedex"
                    height={200}
                    width={200}
                />
                <form onSubmit={handleSubmit}>
                    <TextField
                        value = {pokemon.toLowerCase()}
                        onChange={(event) => {
                            setPokemon(event.target.value);
                            setError('');
                        }}
                        id="pokemon"
                        name="pokemon" 
                        label="Who's that Pokemon" 
                        variant="filled" 
                        margin="normal" 
                        color="success" 
                        className="custom-background"
                        error={!!error}
                        helperText={error}
                    />
                    <br/>
                    <Stack spacing={2} direction="row">
                        <Button 
                            id="search" 
                            name="search" 
                            type="submit" 
                            variant="contained" 
                            color="success"
                        >
                            Search
                        </Button>
                        <Button 
                            id="reset" 
                            name="search" 
                            variant="outlined" 
                            color="secondary" 
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </Stack>
                </form>
                
                {pokemonData && (
                    <PokemonCard props={pokemonData}/>
                )}
                

            </div>
        </div>

    );//End of render

};//End of fetchAPI

export default FetchAPI;