export interface Payment{
    payId:number;
    payStatus:"open"|"ing"|"complete"|"close";
    createdAt:string;
}