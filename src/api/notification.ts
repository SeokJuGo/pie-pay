import { QueryFunction } from "@tanstack/query-core";
import localAxios from "@/util/localAxios";
import {Notification} from "@/model/notification"

const axios = localAxios();

export const getNotification: QueryFunction<Notification[]> = async () => {
    try {
        const res = await axios.get('/members/notification');
        return res.data;
    } catch (error) {
        console.error('Failed to fetch data', error);
        throw new Error('Failed to fetch data');
    }
}
