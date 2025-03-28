import { User } from '@/models/User';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Authenticate(){

    const [data, setData] = useState(null);

    useEffect(() => {
        async function PostData(data: User){
            try{
                const req = await axios.post(process.env.KEYCLOAK_ISSUER + '/users', data)
            }
            catch (error){
                console.error("Error creating user:", error)
            }
        }
    })
}