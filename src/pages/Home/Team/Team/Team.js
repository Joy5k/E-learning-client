import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TeamCart from '../TeamCart/TeamCart';

const Team = () => {
    const [teamCollection, setTeamCollection] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data=>setTeamCollection(data))
    },[])


    return (
        <div>
            <div>
                <p className='text-center text-orange-600 font-bold text-xl'>Team</p>
                <h1 className='my-5 text-5xl font-bold text-center'>Meet Our Team</h1>
                <p className='mb-12 w-6/12  mx-auto text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div  className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  md:p-4 md:mx-auto md:8/12 sm:8/12 mx-auto'>
                {
                    teamCollection.map(team => <TeamCart
                        key={team.id}
                        team={team}
                    ></TeamCart>)
             }   
        </div>
        </div>
    );
};

export default Team;