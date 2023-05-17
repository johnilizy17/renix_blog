import React, { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useFormik } from "formik";
import { Image, Input, useToast, Spinner } from "@chakra-ui/react";
import { SignUpAuth } from "../../services/authBlog";
// import SpinLoader from "../Loaders/SpinLoader";

export default function SignUpEmail() {
    const toast = useToast();
    const [loading, setLoading] = React.useState(false);
    const [isShown, setIsShown] = React.useState(false);
    const navigate = useRouter();
    //   const { handleRegister } = useRegisterCallback();

    const loginSchema = yup.object({
        firstname: yup.string().required("Required"),
        lastname: yup.string().required("Required"),
        // phone: yup.string().required("Required"),
        email: yup
            .string()
            .email("This email is not valid")
            .required("Your email is required"),
        password: yup
            .string()
            .required("Your password is required")
            .min(8, "A minimium of 8 characters"),
        username: yup
            .string()
            .required("Your username is required")
            .min(4, "A minimium of 4 characters"),
    });

    // formik
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            // phone: "",
            referalLink: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: () => { },
    });

    const submit = async () => {
        setLoading(true);
        if (!formik.dirty) {
            // toast.error("Please Enter Your Email And Password")

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
            localStorage.clear();
            try {
                const response = await SignUpAuth(formik.values);

                if (response) {
                    toast({
                        title: response?.data.msg,
                        position: "bottom",
                        status: "success",
                        isClosable: true,
                    });
                    navigate.push("/auth/email");
                }
            }
            catch (e) {
                toast({
                    title: e.response?.data?.msg ? e.response?.data?.msg : "Error occured",
                    position: "bottom",
                    status: "error",
                    isClosable: true,
                });
            }
        }
        setLoading(false);
    };

    return (
        <>
            <div className=" w-full mt-4 lg:mt-8 ">
                <p className=" text-sm font-medium mb-2 ">First Name</p>
                <Input
                    name="firstname"
                    focusBorderColor="#ff6700"
                    onChange={formik.handleChange}
                    onFocus={() => formik.setFieldTouched("firstname", true, true)}
                    height="45px"
                    border="1px solid #595959E5"
                    placeholder="Enter First Name"
                    fontSize="sm"
                />
                <div className="w-full h-auto pt-2">
                    {formik.touched.firstname && formik.errors.firstname && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Medium text-[#ff0000]"
                        >
                            {formik.errors.firstname}
                        </motion.p>
                    )}
                </div>
            </div>
            <div className=" w-full mt-4 ">
                <p className=" text-sm font-medium mb-2 ">Last Name</p>
                <Input
                    name="lastname"
                    focusBorderColor="#ff6700"
                    onChange={formik.handleChange}
                    onFocus={() => formik.setFieldTouched("lastname", true, true)}
                    height="45px"
                    border="1px solid #595959E5"
                    placeholder="Enter Last Name"
                    fontSize="sm"
                />
                <div className="w-full h-auto pt-2">
                    {formik.touched.lastname && formik.errors.lastname && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Medium text-[#ff0000]"
                        >
                            {formik.errors.lastname}
                        </motion.p>
                    )}
                </div>
            </div>
            <div className=" w-full mt-4 ">
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
            <div className=" w-full mt-4 ">
                <p className=" text-sm font-medium mb-2 ">Username</p>
                <Input
                    name="username"
                    focusBorderColor="#ff6700"
                    onChange={formik.handleChange}
                    onFocus={() => formik.setFieldTouched("username", true, true)}
                    type="text"
                    height="45px"
                    border="1px solid #595959E5"
                    placeholder="Enter Username"
                    fontSize="sm"
                />
                <div className="w-full h-auto pt-2">
                    {formik.touched.username && formik.errors.username && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Medium text-[#ff0000]"
                        >
                            {formik.errors.username}
                        </motion.p>
                    )}
                </div>
            </div>
            <p className=" text-sm text-center mt-4 mb-4 font-medium lg:w-96 mx-auto ">
                By signing up you accept our terms and conditions & privacy policy
            </p>
            <button
                disabled={loading}
                onClick={() => submit()}
                className=" w-full h-11 rounded-[5px] text-white bg-[#1DA1F2] font-Inter-ExtraBold text-sm mt-3 "
            >
                {loading ? <Spinner size="xs" /> : "Sign Up"}
            </button>
            <p className=" text-sm text-center mt-6 font-medium ">
                Dont have an account?{" "}
                <span
                    onClick={() => Router.push("/auth/email")}
                    className=" text-[#1DA1F2] ml-1 font-bold cursor-pointer"
                >
                    Login
                </span>
            </p>
        </>
    );
}