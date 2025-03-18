'use client';

export function Header(){
    const buttonStyles = "bg-dark-500 border-1 border-gray-700 hover:bg-gray-500 px-5 py-1.5 rounded-full focus:outline-2 focus:outline-gray-200";
    
    return(
        <header className="flex px-10 py-3 bg-black">
            <div className="flex items-center justify-between w-full mx-auto text-yellow-500">
                <img src={('/logo.jpg')} className="h-10 object-cover" />
            </div>

            <nav>
                <ul className="flex items-center justify-center gap-4 text-white">
                    <button className={buttonStyles} onClick={() => window.location.href = "/"}>
                        Home
                    </button>
                    <button className={buttonStyles} onClick={() => window.location.href = "/login"}>
                        Login
                    </button>
                    <button className={buttonStyles} onClick={() => window.location.href = "/signup"}>
                        Register
                    </button>
                </ul>
            </nav>
        </header>
    );
}