'use client';
import React from "react";
import { HideShowPassword } from "./hideShowPassword";


export function PasswordInput(){
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordHidden((prev) => !prev);
    }

    return(
        <div>
            <div className="flex text-xs justify-between text-gray-500">
                <h1 className="mb-1.5">Password</h1>
                <HideShowPassword 
                isPasswordHidden={isPasswordHidden} 
                togglePasswordVisibility={togglePasswordVisibility} 
                />
            </div>

            <input
                id="password"
                type={isPasswordHidden ? "password" : "text"}
                className="mb-1 w-full rounded-lg p-2 border border-gray-300"
            />
        </div>
    )
}