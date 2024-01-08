import Layout from '../components/layout'
import Image from 'next/image';
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import Input from './components/input';
import { useRouter } from 'next/router'
import logo from "../components/Logo.svg";
export default function LoginPage({ username }) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="JobPost">
            <div className=" w-full w-[1923px] bg-slate-200 justify-center items-center inline-flex ">
                <div className=" w-full w-[1400px]  rounded-2xl flex-col justify-start items-start gap-8 inline-flex px-[260px]">
                    <div className="self-stretch p-4 bg-white rounded-2xl justify-start items-start inline-flex">
                        <div className="pr-3 justify-center items-center gap-3 flex">
                            <div className="justify-center items-center gap-1 flex">
                                <div className="w-4 h-4 relative"></div>
                                <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Home</div>
                            </div>
                            <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                        </div>
                        <div className="pr-3 justify-start items-center gap-3 flex">
                            <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Hire</div>
                            <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                        </div>
                        <div className="pr-3 justify-start items-center gap-3 flex">
                            <div className="text-zinc-400 text-sm font-normal font-['Rubik']">My Jobs</div>
                            <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                        </div>
                        <div className="justify-center items-center gap-2.5 flex">
                            <div className="text-neutral-600 text-sm font-normal font-['Rubik']">Post New Job</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[1768px] p-6 bg-white rounded-2xl flex-col justify-start items-center gap-3 flex">
                        <div className="self-stretch h-[1720px] p-6 rounded-lg border border-black border-opacity-10 flex-col justify-start items-start gap-3 flex">
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company Name</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Hiring Manager Name</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Email</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Address</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">City</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">State</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Zip</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Role Type</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Title</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Compensation Type</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Salary Amount</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">OTE</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-end inline-flex">
                                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Inbound Leads?</div>
                                    </div>
                                    <div className="w-[34px] h-[18px] pl-px pr-[17px] py-px bg-zinc-400 rounded-[32px] justify-start items-center flex">
                                        <div className="w-4 h-4 relative bg-white rounded-[32px]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-end inline-flex">
                                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Prospecting Required?</div>
                                    </div>
                                    <div className="w-[34px] h-[18px] pl-px pr-[17px] py-px bg-zinc-400 rounded-[32px] justify-start items-center flex">
                                        <div className="w-4 h-4 relative bg-white rounded-[32px]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Average Order</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Industry</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[107px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Job Description</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[83px] px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-end inline-flex">
                                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Customer Service/ Success Support?</div>
                                    </div>
                                    <div className="w-[34px] h-[18px] pl-px pr-[17px] py-px bg-zinc-400 rounded-[32px] justify-start items-center flex">
                                        <div className="w-4 h-4 relative bg-white rounded-[32px]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Created Date</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Expiration Date</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Status</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company Description</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[83px] px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company URL</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Header Image URL</div>
                                    <div className="h-3 justify-between items-center flex">
                                        <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Please Input here.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-8 flex-col justify-start items-end gap-2.5 flex">
                                <div className="self-stretch h-8 px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="w-5 h-5 relative"></div>
                                    <div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Submit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     var username = getCookie('username', { req, res });
//     if (username != undefined) {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: "/"
//             }
//         }
//     }
//     return { props: { username: false } };
// };