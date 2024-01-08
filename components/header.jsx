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
                                <div className="text-blue-950 text-xl font-normal font-['Rubik']">Hire</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-1 inline-flex">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                            <div className="w-5 h-5 relative bg-[url('/img/lead.svg')]"></div>
                            <div className="text-neutral-600 text-xl font-normal font-['Rubik']">Lead</div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-1 inline-flex">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                            <div className="w-5 h-5 px-[3.33px] py-[2.50px] justify-center items-center flex bg-[url('/img/train.svg')]">
                                <div className="w-[13.33px] h-[15px] relative">
                                </div>
                            </div>
                            <div className="text-neutral-600 text-xl font-normal font-['Rubik']">Train</div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-1 inline-flex">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                            <div className="w-5 h-5 relative bg-[url('/img/community.svg')]"></div>
                            <div className="text-neutral-600 text-xl font-normal font-['Rubik']">Community</div>
                        </div>
                    </div>
                </div>
                <div className="w-[217px] h-9 px-4 py-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
                    <label className="w-5 h-5 relative bg-[url('/img/search.svg')]"></label>
                    <input placeholder="Search" className="text-black text-sm font-normal bg-slate-50 font-['Rubik'] pl-[5px]" />
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