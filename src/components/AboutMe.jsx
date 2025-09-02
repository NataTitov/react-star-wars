import {base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState();
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color
                }
                setHero(info);
            })
    }, [])

    return (
        <>
            {(!!hero) &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    <p><span className='display-6'>name:</span> {hero.name}</p>
                    <p><span className='display-6'>gender:</span> {hero.gender}</p>
                    <p><span className='display-6'>birth year:</span> {hero.birth_year}</p>
                    <p><span className='display-6'>height:</span> {hero.height}</p>
                    <p><span className='display-6'>mass:</span> {hero.mass}</p>
                    <p><span className='display-6'>hair color:</span> {hero.hair_color}</p>
                    <p><span className='display-6'>skin color:</span> {hero.skin_color}</p>
                    <p><span className='display-6'>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </>
    );
};

export default AboutMe;