import Layout from '../components/layout'
import Image from 'next/image';
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'
import logo from "../components/Logo.svg";
import Input from './components/input';
import { IoSearch, IoEyeOutline } from "react-icons/io5"
import axios from 'axios';
export default function LoginPage({ username }) {
    const router = useRouter()
    const { msg } = router.query;
    const handleSignUp = () => {
        console.log(document.forms["signin"]['mail'].value, document.forms["signin"]['password'].value)
        axios
            .post("http://localhost:5000/api/auth/login", { email: document.forms["signin"]['mail'].value, password: document.forms["signin"]['password'].value })
            .then((res) => {
                console.log(res.data);
                if (res.data.Success == 'Success') {
                    router.push("/jobPost")
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (

        <div class="h-screen w-full w-[1923px] bg-slate-200 justify-center items-center inline-flex ">
            <form name='signin'>
                <div class="w-[721px] h-[557px] p-6 bg-white rounded-2xl shadow justify-start items-start gap-6 inline-flex">
                    <img class="w-[246px] self-stretch rounded-lg" src="/login_side.png" />
                    <div class="grow shrink basis-0 self-stretch pt-6 flex-col justify-start items-center gap-6 inline-flex">
                        <div class="w-[258px] h-7 justify-center items-center inline-flex">
                            {/* <img class="w-[258px] h-7 relative" src="/Logo.png" /> */}
                            <Image class="w-[258px] h-7 relative" src={logo} />
                        </div>
                        <div class="flex-col justify-start items-center gap-1 flex">
                            <div class="text-sky-700 text-base font-semibold font-['Rubik']">Welcome to back</div>
                            <div class="text-zinc-400 text-[10px] font-normal font-['Rubik']">Sign in to continue</div>
                        </div>
                        <div class="self-stretch h-[136px] flex-col justify-start items-center gap-[18px] flex">
                            <div class="self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex">
                                <Input type='email' PrefixIcon={<IoSearch />} placeholder='Please Input here.' label='Email Address' name='mail' />
                            </div>
                            <div class="self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex">

                                <Input backIcon={<IoEyeOutline />} placeholder='Please Input here.' label='User Password' name='password' />
                            </div>
                        </div>
                        <button type='button' onClick={handleSignUp} class="border-none bg-[#312e81] rounded-lg flex self-stretch justify-center items-center px-6 py-2  text-slate-200 text-sm font-normal font-['Rubik'] capitalize" >Login</button>
                        {/* <div class="self-stretch justify-start items-start gap-2.5 inline-flex">
                            <button onClick={handleSignUp} class="grow shrink basis-0 h-8 px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 flex">
                                <div class="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Login</div>
                            </button>
                        </div> */}
                        <div class="self-stretch justify-start items-center gap-3 inline-flex">
                            <div class="grow shrink basis-0 h-[0px] border border-zinc-400"></div>
                            <div class="text-zinc-400 text-sm font-normal font-['Rubik']">or</div>
                            <div class="grow shrink basis-0 h-[0px] border border-zinc-400"></div>
                        </div>
                        <div class="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                            <button class="self-stretch h-8 px-6 py-2 bg-white rounded-lg border border-gray-300 justify-center items-center gap-2.5 inline-flex">
                                <img class="w-5 h-5 relative" src="/logos_google-icon.png"></img>
                                <div class="text-indigo-900 text-sm font-normal font-['Rubik'] capitalize">Google</div>
                            </button>
                            <button class="self-stretch h-8 px-6 py-2 bg-white rounded-lg border border-gray-300 justify-center items-center gap-2.5 inline-flex">
                                <img class="w-5 h-5 relative" src="/logos_facebook.png"></img>
                                <div class="text-indigo-900 text-sm font-normal font-['Rubik'] capitalize">Facebook</div>
                            </button>
                        </div>
                        <div class="justify-center items-start gap-1 inline-flex">
                            <div class="text-neutral-600 text-sm font-normal font-['Rubik']">Don’t have an account?</div>
                            <div class="justify-center items-center gap-2.5 flex">
                                <Link class="text-blue-500 text-sm font-medium font-['Rubik'] underline" href="/signup">Sign up</Link>
                                {/* <div class="text-blue-500 text-sm font-medium font-['Rubik'] underline">Sign up</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username != undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: { username: false } };
};