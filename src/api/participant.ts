import { QueryFunction } from "@tanstack/query-core";
import { Member } from "@/model/member";
import localAxios from "@/util/localAxios";
const axios = localAxios();

export const getMembers: QueryFunction<Member[]> = async ({ queryKey }) => {
    const [_,meetId] = queryKey;
    try {
        const res = await axios.get(`/meet/${meetId}`);
        return res.data;
    } catch (error) {
        console.error('Failed to fetch data', error);
        throw new Error('Failed to fetch data');
    }
}
