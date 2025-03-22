import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaButton } from '../../components/buttons/index';
import { faFacebook, faGoogle, faApple, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function LoginPage(){

    return (
        <div className="flex flex-col bg-gray-100 items-center h-screen">
            <div className="flex flex-col bg-white rounded-lg shadow-lg mt-20 w-150 h-150">
                
                <div className="text-2xl font-bold text-center p-5 text-gray-800 mb-10">
                    Sign in to your account
                </div>
                
                <div className="flex flex-col ml-20 mr-20">
                    <form>
                        <h1 className="mb-1.5 text-xs text-gray-500">E-mail adress or username</h1>
                        <input type="e-mail" className="mb-8 w-full rounded-lg p-2 border-1 border-gray-300" />
                    </form>

                    <form>
                        <div className="flex justify-between text-gray-500">
                            <h1 className="mb-1.5 text-xs">Password</h1>
                            <button className="grid grid-cols-2 gap-1 text-xs transition duration-150 linear hover:text-gray-800">
                                <FontAwesomeIcon icon={faEyeSlash} />
                                <label>Hide</label>
                            </button>
                        </div>
                        <input type="password" className="mb-1 w-full rounded-lg p-2 border-1 border-gray-300" />
                    </form>

                    <div className="flex items-center box-border text-xs justify-between">
                        
                        <div className="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" className="accent-gray-800 w-3 h-3 bg-gray-100 border-gray-300 rounded-sm" />
                            <label className="ms-2 text-xs text-gray-500">Remember me</label>
                        </div>

                        <a href="/recover" className="text-blue-600 text-xs">Forgot Password?</a>
                        
                    </div>

                    <div className="flex mt-10 text-sm text-gray-500">
                        By continuing, you agree to the Terms of Use and Privacy Policy.
                    </div>

                    <div className="flex flex-col mt-1 w-full">
                        <button className="bg-gray-400 text-lg text-white p-3 rounded-full transition duration-300 linear hover:bg-gray-500">
                            Sign in
                        </button>
                    </div>
                    

                    <div className="flex text-center items-center gap-2 justify-center text-sm text-gray-500 mt-5">
                        Don't have an account? 
                        <a href="/signup" className="text-blue-600 underline">Sign up</a>
                    </div>

                    <div className="flex text-center items-center justify-center mt-8 gap-3">
                        <div className="w-35 border-t border-gray-300"/>
                        <span className="px-3 text-gray-500 text-sm">Or continue with</span>
                        <div className="w-35 border-t border-gray-300"/>
                    </div>

                    <div>
                        <div className="flex justify-center items-center gap-4 mt-5">     
                            <button className="bg-blue-600 text-white p-3 rounded-full">
                                <FontAwesomeIcon icon={faFacebook} />
                            </button>
                            <button className="bg-red-600 text-white p-3 rounded-full">
                                <FontAwesomeIcon icon={faGoogle} />
                            </button>
                            <button className="bg-black text-white p-3 rounded-full">
                                <FontAwesomeIcon icon={faApple} />
                            </button>
                            <button className="bg-blue-400 text-white p-3 rounded-full">
                                <FontAwesomeIcon icon={faTwitter} />
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}