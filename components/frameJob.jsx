import { Button, Input, Switch, Form } from "antd";
import { useRouter } from 'next/router'
export default function FrameJob({ username }) {
    const router = useRouter()
    const { msg } = router.query
    const onJob = () => {
        router.push("/job")
    }
    return (

        <div className="w-[1922px] h-[184px] flex-col justify-center items-start gap-6 inline-flex bg-[url('/img/fram-job.png')] pl-[260.5px]">
            <div className="justify-start items-center gap-6 inline-flex ">
                <div className="bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
                    <div className="w-16 h-16 relative bg-[url('/img/ic_avatar.png')]"></div>
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                    <div className="text-neutral-600 text-[32px] font-normal font-['Rubik'] capitalize">Post New Job</div>
                    <div className="text-black text-opacity-50 text-xs font-normal font-['Rubik']">Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus.</div>
                </div>
            </div>
            <div className="justify-start items-center gap-2.5 inline-flex">
                <Button className="text-blue bg-slate-300 focus:bg-blue-900 focus:text-white w-[103px] px-6 py-2 rounded-lg justify-center items-center gap-2.5 flex">
                    Dashboard
                </Button>
                <Button onClick={onJob} className="text-blue bg-slate-300 focus:bg-blue-900 focus:text-white  w-[103px] px-6 py-2 rounded-lg justify-center items-center gap-2.5 flex">
                    My Jobs
                </Button>
                <Button className="text-blue bg-slate-300 focus:bg-blue-900 focus:text-white w-[103px] px-6 py-2 rounded-lg justify-center items-center gap-2.5 flex">
                    Applicants
                </Button>
                <Button className="text-blue bg-slate-300 focus:bg-blue-900 focus:text-white w-[103px] px-6 py-2 rounded-lg justify-center items-center gap-2.5 flex">
                    Interviews
                </Button>
            </div>
        </div>

    )
}