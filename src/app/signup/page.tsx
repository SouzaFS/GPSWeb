import { Authenticate } from '@/components/auth/authenticate';
import { PasswordInput } from '@/components/password/passwordInput';

export default function SignUpPage(){

    return (
        <div className="flex flex-col bg-gray-100 items-center h-screen">
            <div className="flex flex-col bg-white rounded-lg shadow-lg mt-20 w-150 h-150">
                
                <div className="text-2xl font-bold text-center p-5 text-gray-800 mb-3 mt-3">
                    Are you new? Sign up
                </div>

                <div className="flex flex-col ml-20 mr-20">
                    <form>
                        <div className="flex gap-4">
                            <div>
                                <h1 className="mb-1.5 text-xs text-gray-500">First Name</h1>
                                <input id="first_name" type="text" className="mb-3 w-53 rounded-lg p-2 border-1 border-gray-300" />
                            </div>

                            <div>
                                <h1 className="mb-1.5 text-xs text-gray-500">Last Name</h1>
                                <input id="last_name" type="text" className="mb-3 w-53 rounded-lg p-2 border-1 border-gray-300" />
                            </div>
                        </div>

                        <div>
                            <h1 className="mb-1.5 text-xs text-gray-500">Username</h1>
                            <input id="username" type="username" className="mb-3 w-full rounded-lg p-2 border-1 border-gray-300" />
                        </div>

                        <div>
                            <h1 className="mb-1.5 text-xs text-gray-500">E-mail address</h1>
                            <input id="email" type="e-mail" className="mb-3 w-full rounded-lg p-2 border-1 border-gray-300" />
                        </div>         
                        
                        <PasswordInput />
                        
                        <div className="flex mt-10 text-sm text-gray-500">
                            By continuing, you agree to the <a href="/terms" className="px-1 underline"> Terms of Use </a> and <a href="/policy" className="pl-1 underline">Privacy Policy</a>.
                        </div>
                        
                        <div className="flex flex-col mt-1 w-full">
                            <button className="bg-gray-400 text-lg text-white p-3 rounded-full transition duration-300 linear hover:bg-gray-500">
                                Sign up
                            </button>
                        </div>
                    
                    </form>
                    
                    <div className="flex text-center items-center gap-2 justify-center text-sm text-gray-500 mt-5">
                        Already have an account? 
                        <a href="/login" className="text-blue-600">Sign in</a>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        </div>
    );
}