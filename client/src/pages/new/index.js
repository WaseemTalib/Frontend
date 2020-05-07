import React  from 'react';
import Error from '../../components/error';
export default function(){
    let reload=()=>{
        alert('Reloaded')
    }
    let signOut=()=>{
        alert('SignedOut')
    }
    return(
        <Error reload={reload} signOut={signOut}/>
    )
}