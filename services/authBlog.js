import axios from "../Auth/ApiAxios"

// Unauthenticated User
export const sendAdminPasswordResetLink = async ({ email }) => {
	return axios.post(`auth/admin/forgot-password`, { email });
};


export const loginAuth = async ( data ) => {
	return axios.post(`login`, data);
};

export const googleAuth = async ( data ) => {
	return axios.post(`google_auth`, data);
};


export const SignUpAuth = async ( data ) => {
	return axios.post(`register`, data);
};

export const UpdataPost = async (id, data ) => {
	return axios.put(`post/blog/${id}`, data);
};

export const getSinglePost = async (id ) => {
	return axios.get(`post/blog/${id}`);
};

export const PostBlog = async (data ) => {
	const formData = new FormData()
	formData.append("title", data.title)
	formData.append("body", data.body)
	if(data.image){
	formData.append("image", data.image)
}

	return axios.post(`post`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const verifyProfile = async () => {
	return axios.get(`/user/profile`);
};

export const verifyAdminEmailAddress = async ({ otp }) => {
	return axios.post(`auth/admin/verify-email`, { otp });
};


export const getBlogPost = async () => {
	return axios.get(`posts`)
}


export const getBlogPostsearch = async (id) => {
	return axios.get(`posts?search=${id}`)
}
