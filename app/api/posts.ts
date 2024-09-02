import axios from "axios";
import { BACKEND_URL } from "./config";

export interface Post {
    id: number;
    title: string;
    text: string;
}

export async function getPosts() {
    return (await axios.get(`${BACKEND_URL}/posts`)).data;
}

export async function getPost(id: string) {
    return (await axios.get(`${BACKEND_URL}/posts/${id}`)).data;
}
