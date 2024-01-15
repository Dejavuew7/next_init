import Layout from '../components/layout'
import Image from 'next/image';
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import Footer from '../components/footer';
import { useRouter } from 'next/router'
import logo from "../components/Logo.svg";
import { TbHome } from "react-icons/tb";
import { VscCheck } from "react-icons/vsc";
import { Button, Input, Switch, Form } from "antd";
import axios from "axios";
export default function LoginPage({ username }) {
    const router = useRouter()
    const { msg } = router.query
    const onSubmit = (e) => {
        console.log(e)
    }
    return (
        <Layout pageTitle="JobPost">
            <div className="w-[1923px] bg-slate-200 justify-center items-center inline-flex ">
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
                            <Form onFinish={onSubmit} className="w-[100%]">
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company Name</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                                                Required
                                            </div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="company"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>

                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Hiring Manager Name</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>

                                    <Form.Item
                                        className="w-full"
                                        name="hiring"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>

                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Email</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Address</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="address"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">City</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="city"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">State</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="state"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Zip</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="zip"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Role Type</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="role"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Title</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="title"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Compensation Type</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="compensation"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Salary Amount</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="salaryamount"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">OTE</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="ote"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex ">
                                    <div className="self-stretch justify-between items-end inline-flex">
                                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                                            <div className="text-neutral-600 text-md font-bold font-sans mt-[-40px]">
                                                Inbound Leads?
                                            </div>
                                        </div>
                                        <Form.Item name="inboundleads">
                                            <Switch
                                                className=" text-yellow-100 bg-black mt-[10px]"
                                                size="small"
                                                defaultChecked
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex ">
                                    <div className="self-stretch justify-between items-end inline-flex">
                                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                                            <div className="text-neutral-600 text-md font-bold font-sans mt-[-40px]">
                                                Prospecting Required?
                                            </div>
                                        </div>
                                        <Form.Item name="prospecting">
                                            <Switch
                                                defaultChecked
                                                className=" text-yellow-100 bg-black mt-[20px]"
                                                size="small"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex mt-[25px]">
                                    <div className="self-stretch justify-between items-end inline-flex">
                                        <div className="text-neutral-600 text-md font-bold font-sans">
                                            Average Order
                                        </div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-sans">
                                                Required
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Industry</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="Industry"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']"> Job Description</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="JobDescription"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']"> Customer Service/ Success Support?</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="Customer"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">  Created Date</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="Created"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">  Expiration Date</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="Expiration"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>

                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']"> Status</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="Status"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']"> Company Description</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="Company"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']"> Company URL</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="CompanyURL"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']"> Header img URL</div>
                                        <div className="h-3 justify-between items-center flex">
                                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                                        </div>
                                    </div>
                                    <Form.Item
                                        className="w-full"
                                        name="Header"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Please input here"></Input>
                                    </Form.Item>
                                </div>
                                <div class="w-[130px] ml-auto h-8 my-2 flex-col justify-start text-color-white items-end gap-2.5 flex mr-6 cursor-pointer">
                                    <div class="flex justify-end self-stretch text-white h-8 px-6 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 inline-flex ">
                                        <VscCheck class="text-slate-200 text-white  text-md font-normal font-sans capitalize " />
                                        <Button htmlType="submit" class="border-none text-md font-normal font-sans capitalize ">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
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