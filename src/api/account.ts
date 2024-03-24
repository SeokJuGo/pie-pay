import { QueryFunction } from "@tanstack/query-core";
import { Member } from "@/model/member";
import localAxios from "@/util/localAxios";
import {Account} from "@/model/account";

const axios = localAxios();

export const getAccount: QueryFunction<Account> = async () => {
    try {
        const res = await axios.get('/members/accounts');
        return res.data;
    } catch (error) {
        console.error('Failed to fetch data', error);
        throw new Error('Failed to fetch data');
    }
}
