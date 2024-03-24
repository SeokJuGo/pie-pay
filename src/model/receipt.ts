
interface MenuItem {
  menuName: string;
  menuPrice: number;
  quantity: number;
}

export interface Receipt {
  orderMenuId: number;
  storeName: string;
  address: string;
  phone: string;
  createdAt: string;
  menuItems: MenuItem[];
  totalAmount: number;
}
