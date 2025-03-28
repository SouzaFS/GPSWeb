'use client';

import { ProfileButton } from "./profileButton";

export function Header(){
    
    return(
        <header className="flex px-10 py-3 bg-black">
            <div className="flex items-center justify-between w-full mx-auto">
                <img src='/logo.jpg' className="h-10 object-cover" />
            </div>

            <div className="flex items-center justify-center gap-7">
                <a href="/" className="flex flex-col text-white items-center justify-center">
                    <img src='/house-solid.svg' className="w-10 p-1 bg-white rounded-full object-cover"/>
                </a>
                <ProfileButton />
            </div>
            
        </header>
    );
}