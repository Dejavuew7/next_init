import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '../components/footer';
import Pagination from '../components/pagination';
export default function SignupPage({ username }) {
    const router = useRouter()
    const [pageNum, setPageNum] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const { msg } = router.query
    const onPostJob = () => {
        router.push('/jobPost')
    }
    return (
        <Layout pageTitle="job">
            <div className="w-[1923px] bg-slate-200 justify-center items-center inline-flex ">
                <div class="w-[1400px] h-[813px] rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
                    <div class="self-stretch p-4 bg-white rounded-2xl justify-start items-start inline-flex">
                        <div class="pr-3 justify-center items-center gap-3 flex">
                            <div class="justify-center items-center gap-1 flex">
                                <div class="w-4 h-4 relative"></div>
                                <div class="text-zinc-400 text-sm font-normal font-['Rubik']">Home</div>
                            </div>
                            <div class="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                        </div>
                        <div class="pr-3 justify-start items-center gap-3 flex">
                            <div class="text-zinc-400 text-sm font-normal font-['Rubik']">Hire</div>
                            <div class="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                        </div>
                        <div class="justify-center items-center gap-2.5 flex">
                            <div class="text-neutral-600 text-sm font-normal font-['Rubik']">My Jobs</div>
                        </div>
                    </div>
                    <div class="self-stretch h-[732px] p-6 bg-white rounded-2xl flex-col justify-start items-start gap-3 flex">
                        <div class="self-stretch justify-start items-center gap-3 inline-flex">
                            <div class="w-6 h-6 px-1 py-[3px] justify-center items-center flex">
                                <div class="w-4 h-[18px] relative">
                                </div>
                            </div>
                            <div class="text-neutral-600 text-base font-normal font-['Rubik']">My All Jobs</div>
                            <div></div>
                            <div class="grow shrink basis-0 h-8 justify-end items-start gap-2.5 flex">
                                <div class="w-[141px] h-8 p-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 flex">
                                    <div class="w-[18px] h-[18px] relative"></div>
                                    <div class="text-zinc-400 text-sm font-normal font-['Rubik']">Search</div>
                                </div>
                                <div class="h-8 px-2 py-1 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 flex">
                                    <div class="w-[18px] h-[18px] relative"></div>
                                    <div class="grow shrink basis-0 text-zinc-400 text-sm font-normal font-['Rubik']">Filter</div>
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="w-[168px] px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 flex">
                                    <div class="w-5 h-5 pl-[3.33px] pr-[2.61px] pt-[1.67px] pb-[1.63px] justify-center items-center flex">
                                        <div class="w-[14.06px] h-[16.70px] relative bg-[url('/ic_submit.png')]">
                                        </div>
                                    </div>
                                    <button onClick={onPostJob} class="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Post new job</button>
                                </div>
                            </div>
                        </div>
                        <div class="self-stretch h-[584px] flex-col justify-start items-start flex">
                            <div class="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                                <div class="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                    <div class="self-stretch justify-start items-center gap-6 inline-flex">
                                        <div class="grow shrink basis-0 h-6 justify-between items-center flex">
                                            <div class="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">Looking for front end Engineer</div>
                                        </div>
                                        <div class="justify-start items-start gap-2 flex">
                                            <div class="justify-start items-center gap-2 flex">
                                                <div class="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                                    <div class="w-[13.50px] h-[13.50px] relative">
                                                    </div>
                                                </div>
                                                <div class="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                                    <div class="text-white text-xs font-normal font-['Rubik']">fixed 30$</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div class="py-0.5 justify-start items-start flex">
                                            <div class="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                                <div class="w-3 h-[15px] relative">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                                <div class="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                    <div class="self-stretch justify-start items-center gap-6 inline-flex">
                                        <div class="grow shrink basis-0 h-6 justify-between items-center flex">
                                            <div class="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">Looking for front end Engineer</div>
                                        </div>
                                        <div class="justify-start items-start gap-2 flex">
                                            <div class="justify-start items-center gap-2 flex">
                                                <div class="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                                    <div class="w-[13.50px] h-[13.50px] relative">
                                                    </div>
                                                </div>
                                                <div class="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                                    <div class="text-white text-xs font-normal font-['Rubik']">fixed 30$</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div class="py-0.5 justify-start items-start flex">
                                            <div class="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                                <div class="w-3 h-[15px] relative">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                                <div class="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                    <div class="self-stretch justify-start items-center gap-6 inline-flex">
                                        <div class="grow shrink basis-0 h-6 justify-between items-center flex">
                                            <div class="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">Back-end developer need.</div>
                                        </div>
                                        <div class="justify-start items-start gap-2 flex">
                                            <div class="justify-start items-center gap-2 flex">
                                                <div class="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                                    <div class="w-[13.50px] h-[13.50px] relative">
                                                    </div>
                                                </div>
                                                <div class="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                                    <div class="text-white text-xs font-normal font-['Rubik']">fixed 3000$</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div class="py-0.5 justify-start items-start flex">
                                            <div class="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                                <div class="w-3 h-[15px] relative">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                                <div class="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                    <div class="self-stretch justify-start items-center gap-6 inline-flex">
                                        <div class="grow shrink basis-0 h-6 justify-between items-center flex">
                                            <div class="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">We are hiring WebGL developer</div>
                                        </div>
                                        <div class="justify-start items-start gap-2 flex">
                                            <div class="justify-start items-center gap-2 flex">
                                                <div class="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                                    <div class="w-[13.50px] h-[13.50px] relative">
                                                    </div>
                                                </div>
                                                <div class="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                                    <div class="text-white text-xs font-normal font-['Rubik']">hourly 50$</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div class="py-0.5 justify-start items-start flex">
                                            <div class="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                                <div class="w-3 h-[15px] relative">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                                <div class="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                    <div class="self-stretch justify-start items-center gap-6 inline-flex">
                                        <div class="grow shrink basis-0 h-6 justify-between items-center flex">
                                            <div class="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">Need UI / UX designer</div>
                                        </div>
                                        <div class="justify-start items-start gap-2 flex">
                                            <div class="justify-start items-center gap-2 flex">
                                                <div class="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                                    <div class="w-[13.50px] h-[13.50px] relative">
                                                    </div>
                                                </div>
                                                <div class="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                                    <div class="text-white text-xs font-normal font-['Rubik']">fixed 30$</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div class="py-0.5 justify-start items-start flex">
                                            <div class="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                                <div class="w-3 h-[15px] relative">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                                <div class="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                    <div class="self-stretch justify-start items-center gap-6 inline-flex">
                                        <div class="grow shrink basis-0 h-6 justify-between items-center flex">
                                            <div class="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">Looking for front end Engineer</div>
                                        </div>
                                        <div class="justify-start items-start gap-2 flex">
                                            <div class="justify-start items-center gap-2 flex">
                                                <div class="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                                    <div class="w-[13.50px] h-[13.50px] relative">
                                                    </div>
                                                </div>
                                                <div class="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                                    <div class="text-white text-xs font-normal font-['Rubik']">fixed 30$</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div class="py-0.5 justify-start items-start flex">
                                            <div class="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                                <div class="w-3 h-[15px] relative">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                                <div class="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                    <div class="self-stretch justify-start items-center gap-6 inline-flex">
                                        <div class="grow shrink basis-0 h-6 justify-between items-center flex">
                                            <div class="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">Looking for front end Engineer</div>
                                        </div>
                                        <div class="justify-start items-start gap-2 flex">
                                            <div class="justify-start items-center gap-2 flex">
                                                <div class="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                                    <div class="w-[13.50px] h-[13.50px] relative">
                                                    </div>
                                                </div>
                                                <div class="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                                    <div class="text-white text-xs font-normal font-['Rubik']">fixed 30$</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div class="py-0.5 justify-start items-start flex">
                                            <div class="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                                <div class="w-3 h-[15px] relative">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                                <div class="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 relative"></div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                    <div class="self-stretch justify-start items-center gap-6 inline-flex">
                                        <div class="grow shrink basis-0 h-6 justify-between items-center flex">
                                            <div class="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">Back-end developer need.</div>
                                        </div>
                                        <div class="justify-start items-start gap-2 flex">
                                            <div class="justify-start items-center gap-2 flex">
                                                <div class="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                                    <div class="w-[13.50px] h-[13.50px] relative">
                                                    </div>
                                                </div>
                                                <div class="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                                    <div class="text-white text-xs font-normal font-['Rubik']">fixed 3000$</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div class="py-0.5 justify-start items-start flex">
                                            <div class="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                                <div class="w-3 h-[15px] relative">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Pagination
                            total={total}
                            pageNum={pageNum}
                            setPageNum={setPageNum}

                        />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
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