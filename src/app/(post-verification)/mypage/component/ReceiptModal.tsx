'use client'

import * as styles from '@/styles/payment/result/receiptmodal.css'


const menuItems = [{menuName: "족발(대)",menuPrice: 62000, quantity: 1},{menuName: "계란찜",menuPrice: 8000, quantity: 1},{menuName: "참이슬",menuPrice: 5000,quantity: 3},{menuName: "카스", menuPrice: 5000, quantity: 2}]
const menuItems2 = [{menuName: "담배",menuPrice: 4000, quantity: 1},{menuName: "라면",menuPrice: 4000, quantity: 1},{menuName: "참이슬",menuPrice: 5000,quantity: 3},{menuName: "카스", menuPrice: 5000, quantity: 2}]
const paymentResult = {orderMenuId:1, storeName: "(주) 뽕족 강남역본점",address: "서울 강남구 테헤란로4길 15(역삼동)",phone:"010-2839-1132",createdAt: "2024-03-20T11:39:04.663Z",menuItems,totalAmount:95000}



export default function ReceiptModal() {

  return (<div className={styles.container}>
    <p className={styles.paragraph}>{paymentResult?.storeName}</p>
    <ul className={styles.ul.store}>
      <li>{paymentResult?.phone}</li>
      <li>{paymentResult?.address}</li>
      <li>{paymentResult?.createdAt}</li>
    </ul>
    <ul className={styles.ul.menu}>
      <li>메뉴명</li>
      <li>가격</li>
      <li>수량</li>
      <li>합계</li>
    </ul>
    <hr />
    {paymentResult && paymentResult.menuItems && paymentResult?.menuItems.map((menuItem) => (
      <ul className={styles.ul.menu} key={menuItem.menuName}>
        <li>{menuItem.menuName}</li>
        <li>{menuItem.menuPrice.toLocaleString()}</li>
        <li>{menuItem.quantity}</li>
        <li>{(menuItem.menuPrice * menuItem.quantity).toLocaleString()}</li>
      </ul>
    ))}
    <hr/>
    <ul className={styles.ul.menu}>
      <li/><li/><li/>
      <li >{paymentResult?.totalAmount.toLocaleString()}</li>
    </ul>
  </div>);
}