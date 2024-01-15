import { Button, Input, Switch, Form } from "antd";
import { CiSearch } from "react-icons/ci";
export default function Header({ username }) {
    return (
        <div className="w-[1923px] h-[69px] px-64 py-3.5 bg-white justify-center items-center gap-8 inline-flex">
            <div className="grow shrink basis-0 h-[47px] justify-start items-center gap-8 flex">
                <div className="w-[231px] h-[29px] justify-center items-center  flex ">
                    <div className="w-[231px] h-[29px] relative bg-[url('/img/Logo.svg')]">
                    </div>
                </div>
                <div className="grow shrink basis-0 h-8 pl-20 justify-center items-start gap-[54px] flex">
                    <div className="flex-col justify-center items-center gap-2 inline-flex">
                        <div className="flex-col justify-center items-center gap-4 flex">
                            <div className="justify-center items-center gap-1.5 inline-flex">
                                <div className="w-5 h-5 relative bg-[url('/img/hire.svg')]"></div>
                                <button className="text-blue-950 text-xl font-normal font-['Rubik']">Hire</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-1 inline-flex">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                            <div className="w-5 h-5 relative bg-[url('/img/lead.svg')]"></div>
                            <button className="text-neutral-600 text-xl font-normal font-['Rubik']">Lead</button>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-1 inline-flex">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                            <div className="w-5 h-5 px-[3.33px] py-[2.50px] justify-center items-center flex bg-[url('/img/train.svg')]">
                                <div className="w-[13.33px] h-[15px] relative">
                                </div>
                            </div>
                            <button className="text-neutral-600 text-xl font-normal font-['Rubik']">Train</button>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-1 inline-flex">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                            <div className="w-5 h-5 relative bg-[url('/img/community.svg')]"></div>
                            <button className="text-neutral-600 text-xl font-normal font-['Rubik']">Community</button>
                        </div>
                    </div>
                </div>
                <div >
                    <Input
                        className="text-zinc-400  text-sm font-normal font-sans bg-slate-200 w-[217px] h-9 px-4 py-2 rounded-2xl justify-start items-center "
                        prefix={<CiSearch className="text-zinc-400" />}
                        placeholder="Search"
                    ></Input>

                </div>
                <div className="w-6 h-6 relative"></div>
                <div className="justify-start items-center gap-3 flex">
                    <div className="w-10 h-10 justify-center items-center flex">
                        <img className="w-10 h-10 rounded-full border-2 border-slate-200" src="/img/Ellipse.png" />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-neutral-600 text-xl font-medium font-['Rubik']">John Doe</div>
                        <div className="text-zinc-400 text-base font-normal font-['Rubik']">Hiring Manager</div>
                    </div>
                </div>
            </div>
        </div>
    )
}