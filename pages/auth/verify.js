import React from "react";
import Router, { useRouter } from "next/router";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useFormik } from "formik";
import { Image, Input, Spinner, useToast } from "@chakra-ui/react";

export default function Login() {
    const toast = useToast();
    const [loading, setLoading] = React.useState(false);
    const [isShown, setIsShown] = React.useState(false);
    //   const { handleVerify } = useLoginCallback();
    const navigate = useRouter();
    const loginSchema = yup.object({
        email: yup
            .string()
            .email("This email is not valid")
            .required("Your email is required"),
        password: yup
            .string()
            .required("Your password is required")
            .min(8, "A minimium of 8 characters"),
        code: yup
            .string()
            .required("Your password is required")
    });

    // formik
    const formik = useFormik({
        initialValues: { email: "", password: "", code: "" },
        validationSchema: loginSchema,
        onSubmit: () => { },
    });

    const submit = async () => {
        setLoading(true);
        if (!formik.dirty) {
            toast({
                title: "You have to fill in the form to continue",
                position: "bottom",
                status: "error",
                isClosable: true,
            });
        } else if (!formik.isValid) {
            toast({
                title: "You have to fill in the form to continue",
                position: "bottom",
                status: "error",
                isClosable: true,
            });
        } else {
            //   const response = await handleVerify(JSON.stringify(formik.values));

            //   if (response?.status === 200) {
            //     toast({
            //       title: "successful change password",
            //       position: "bottom",
            //       status: "success",
            //       isClosable: true,
            //     });
            //     navigate.push("/login");


            // }
        }
        setLoading(false);
    };

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
                <p className=" font-bold lg:text-2xl text-center ">Verify OTP</p>
                <div className=" w-full mt-10 lg:mt-8 ">
                    <p className=" text-sm font-medium mb-2 ">Email Address</p>
                    <Input
                        name="email"
                        focusBorderColor="#ff6700"
                        onChange={formik.handleChange}
                        onFocus={() => formik.setFieldTouched("email", true, true)}
                        height="45px"
                        border="1px solid #595959E5"
                        placeholder="Enter email address"
                        fontSize="sm"
                    />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.email && formik.errors.email && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Medium text-[#ff0000]"
                            >
                                {formik.errors.email}
                            </motion.p>
                        )}
                    </div>
                </div>
                <div className=" w-full mt-4 ">
                    <p className=" text-sm mb-2 ">OTP</p>
                    <div className=" w-full relative h-[45px] ">
                        <Input
                            name="code"
                            focusBorderColor="#ff6700"
                            onChange={formik.handleChange}
                            onFocus={() => formik.setFieldTouched("code", true, true)}
                            height="45px"
                            border="1px solid #595959E5"
                            placeholder="Enter OTP"
                            fontSize="sm"
                        />
                    </div>

                </div>

                <div className=" w-full mt-4 ">
                    <p className=" text-sm mb-2 ">Password</p>
                    <div className=" w-full relative h-[45px] ">
                        <Input
                            name="password"
                            focusBorderColor="#ff6700"
                            onChange={formik.handleChange}
                            onFocus={() => formik.setFieldTouched("password", true, true)}
                            height="45px"
                            type={!isShown ? "password" : "text"}
                            border="1px solid #595959E5"
                            placeholder="Enter password"
                            fontSize="sm"
                        />
                        <button
                            className=" top-0 z-20 absolute right-0 px-4 h-full flex items-center justify-center "
                            onClick={() => setIsShown((prev) => !prev)}
                        >
                            {isShown ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg>}

                        </button>
                    </div>
                    <div className="w-full h-auto pt-2">
                        {formik.touched.password && formik.errors.password && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Medium text-[#ff0000]"
                            >
                                {formik.errors.password}
                            </motion.p>
                        )}
                    </div>
                </div>
                <button
                    disabled={loading}
                    onClick={() => submit()}
                    className=" w-full h-[45px] rounded-[5px] text-white bg-[#1DA1F2] font-Inter-ExtraBold text-sm mt-3 "
                >
                    {loading ? <Spinner size="xs" /> : "LOGIN"}
                </button>

            </div>
        </div>
    );
}