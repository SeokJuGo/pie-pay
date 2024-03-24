import { QueryFunction } from "@tanstack/query-core";
import { Member } from "@/model/member";
import localAxios from "@/util/localAxios";
import {Participants} from "@/model/participant";
const axios = localAxios();

export const getPayment: QueryFunction<Participants> = async ({ queryKey }) => {
    const [_,payId] = queryKey;
    try {
        const res = await axios.get<Participants>(`/pay/parties/${payId}`);


        return res.data;
    } catch (error) {
        console.error('Failed to fetch data', error);
        throw new Error('Failed to fetch data');
    }
}
