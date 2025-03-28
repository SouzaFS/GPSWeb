import { PasswordInput } from '@/components/password/passwordInput';

export default function LoginPage(){

    return (
        <div className="flex flex-col bg-gray-100 items-center h-screen">
            <div className="flex flex-col bg-white rounded-lg shadow-lg mt-20 w-150 h-150">
                
                <div className="text-2xl font-bold text-center p-5 text-gray-800 mb-10 mt-3">
                    Sign in to your account
                </div>

                <div className="flex flex-col ml-20 mr-20">
                    <form>
                        <div>
                            <h1 className="mb-1.5 text-xs text-gray-500">E-mail adress</h1>
                            <input id="email" type="e-mail" className="mb-8 w-full rounded-lg p-2 border-1 border-gray-300" />
                        </div>
                        
                        
                        <PasswordInput />
                    
                        <div className="flex items-center box-border text-xs justify-between">
                            <div className="flex items-center">
                                <input id="default-checkbox" type="checkbox" value="" className="accent-gray-800 w-3 h-3 bg-gray-100 border-gray-300 rounded-sm" />
                                <label className="ms-2 text-xs text-gray-500">Remember me</label>
                            </div>
                            <a href="/recover" className="text-blue-600 text-xs">Forgot Password?</a>
                        </div>
                        
                        <div className="flex flex-col mt-13 w-full">
                            <button className="bg-gray-400 text-lg text-white p-3 rounded-full transition duration-300 linear hover:bg-gray-500">
                                Sign in
                            </button>
                        </div>
                    
                    </form>
                    
                    <div className="flex text-center items-center gap-2 justify-center text-sm text-gray-500 mt-5">
                        Don't have an account? 
                        <a href="/signup" className="text-blue-600">Sign up</a>
                    </div>
                    
                    <div className="flex text-center items-center justify-center mt-8 gap-3">
                        <div className="w-35 border-t border-gray-300"/>
                        <span className="px-3 text-gray-500 text-sm">Or continue with</span>
                        <div className="w-35 border-t border-gray-300"/>
                    </div>
                    
                    <div className="flex justify-center items-center gap-10 mt-5">     
                        <button className="bg-black text-white p-3.5 rounded-full relative">
                            <span className="absolute inset-0 flex items-center justify-center">
                                <img src="/x-twitter-brands.svg" className="h-5 filter invert"/>
                            </span>
                        </button>
                        
                        <button className="bg-blue-500 text-white p-3.5 rounded-full relative">
                            <span className="absolute inset-0 flex items-center justify-center">
                                <img src="/facebook-brands.svg" className="h-5 filter invert"/>
                            </span>
                        </button>

                        <button className="bg-red-500 text-white p-3.5 rounded-full relative">
                            <span className="absolute inset-0 flex items-center justify-center">
                                <img src="/google-brands.svg" className="h-5 filter invert"/>
                            </span>
                        </button>

                        <button className="bg-black text-white p-3.5 rounded-full relative">
                            <span className="absolute inset-0 flex items-center justify-center">
                                <img src="/apple-brands.svg" className="h-5 filter invert"/>
                            </span>
                        </button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}