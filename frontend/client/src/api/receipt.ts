import { QueryFunction } from "@tanstack/query-core";
import { Member } from "@/model/member";
import localAxios from "@/util/localAxios";
import { Receipt } from '@/model/receipt';

const axios = localAxios();

export const getReceipt: QueryFunction<Receipt> = async ({ queryKey }) => {
  const [_,payId] = queryKey;
  try {
    const res = await axios.get(`/api/pay/info/receipt/${payId}`);
    console.log(res.data.result);
    return res.data.result;

  } catch (error) {
    console.error('Failed to fetch data', error);
    throw new Error('Failed to fetch data');
  }
}
