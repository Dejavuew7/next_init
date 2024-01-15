export default function Footer({ username }) {
    return (
        <div className=" w-[1923px] h-[253px] px-8 py-12 bg-slate-300 flex-col justify-start items-center inline-flex px-[250px]">
            <div className="self-stretch h-[157px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[231px] h-[29px] justify-center items-center inline-flex">
                            <div className="w-[231px] h-[29px] relative bg-[url('/img/Logo.svg')]">
                            </div>
                        </div>
                        <div className="self-stretch grow shrink basis-0 text-blue-950 text-sm font-normal font-['Rubik']">Lorem ipsum dolor sit amet consectetur. Lectus facilisi id bibendum quis consectetur egestas. </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Fllow Us</div>
                        <div className="justify-start items-start gap-4 inline-flex">
                            <div className="w-6 h-6 relative"></div>
                            <div className="w-6 h-6 relative"></div>
                            <div className="w-6 h-6 relative"></div>
                            <div className="w-6 h-6 relative"></div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div><span className="text-neutral-600 text-sm font-normal font-['Rubik']">Copyright © All rights reserved by </span><span className="text-blue-500 text-sm font-normal font-['Rubik'] underline">Salesmagiq</span></div>
                </div>
            </div>
        </div>
    )
}