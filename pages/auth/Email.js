import React from "react";
import Router, { useRouter } from "next/router";
import {
    Image,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";
import LoginEmail from "../../components/login";

export default function Login() {
    return (
        <div className=" w-full h-screen bg-white lg:bg-[#F5F5F5] flex flex-col items-center ">
            <div className=" lg:loginShadow bg-white w-full flex px-4 lg:px-[35px] py-[22px] justify-center items-center ">
                <button
                    onClick={() => Router.push("/")}
                    className=" flex items-center "
                >
                    <Image
                        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                        className=" ml-1 h-[40px] "
                        alt="logo"
                    />
                </button>
            </div>
            <div className=" lg:loginShadow w-full lg:w-[600px] font-medium lg:my-12 rounded-xl flex flex-col bg-white lg:py-8 px-4 lg:px-[45px] ">
                <p className=" font-bold lg:text-2xl text-center mb-5">LOGIN</p>
                <LoginEmail />
            </div>
        </div>
    );
}