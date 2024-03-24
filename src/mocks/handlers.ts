import {http, HttpResponse, StrictResponse} from 'msw'
import {faker} from "@faker-js/faker";


const MeetMembers = [
    {memberId: 1, nickname: "고석주", profileImage: faker.image.avatar()},
    {memberId: 2, nickname: "김준수", profileImage: faker.image.avatar()},
    {memberId: 3, nickname: "함승찬", profileImage: faker.image.avatar()},
    {memberId: 4, nickname: "류지수", profileImage: faker.image.avatar()},
    {memberId: 5, nickname: "성목", profileImage: faker.image.avatar()},
    {memberId: 6, nickname: "재언", profileImage: faker.image.avatar()},
    {memberId: 7, nickname: "고석주", profileImage: faker.image.avatar()},
    {memberId: 8, nickname: "김준수", profileImage: faker.image.avatar()},
    {memberId: 9, nickname: "함승찬", profileImage: faker.image.avatar()},
    {memberId: 10, nickname: "류지수", profileImage: faker.image.avatar()},
    {memberId: 11, nickname: "성목", profileImage: faker.image.avatar()},
    {memberId: 12, nickname: "재언", profileImage: faker.image.avatar()},
]
// 계좌
const account = {
    "bankName": "하나은행",
    "accountNo": "480-21030-13412",
    "accountBalance": 885420
}
// 참가원
const participants =
        {
            "payId": 3,
            "createdAt": new Date(),
            "payStatus": "ing",
            "participants": [
                {
                    "participantId": 3,
                    "memberInfo": {
                        "memberId": 1,
                        "nickname": "m1",
                        "profileImage": faker.image.avatar()
                    },
                    "isDrinkAlcohol": true,
                    "payAgree": "await"
                },
                {
                    "participantId": 4,
                    "memberInfo": {
                        "memberId": 2,
                        "nickname": "김준수",
                        "profileImage": faker.image.avatar()
                    },
                    "isDrinkAlcohol": false,
                    "payAgree": "await"
                },
                {
                    "participantId": 5,
                    "memberInfo": {
                        "memberId": 3,
                        "nickname": "고석주",
                        "profileImage": faker.image.avatar()
                    },
                    "isDrinkAlcohol": false,
                    "payAgree": "await"
                },

            ]
        }
const participantsResult =
    {
        "payId": 3,
        "createdAt": new Date(),
        "payStatus": "ing",
        "participants": [
            {
                "participantId": 3,
                "memberInfo": {
                    "memberId": 1,
                    "nickname": "이성목",
                    "profileImage": faker.image.avatar()
                },
                "isDrinkAlcohol": false,
                "payAgree": "agree",
                "payAmount" : "30000"
            },
            {
                "participantId": 4,
                "memberInfo": {
                    "memberId": 2,
                    "nickname": "김준수",
                    "profileImage": faker.image.avatar()
                },
                "isDrinkAlcohol": true,
                "payAgree": "deny",
                "payAmount" : "0"
            },
            {
                "participantId": 5,
                "memberInfo": {
                    "memberId": 3,
                    "nickname": "고석주",
                    "profileImage": faker.image.avatar()
                },
                "isDrinkAlcohol": false,
                "payAgree": "await",
                "payAmount" : "15000"
            },
            {
                "participantId": 6,
                "memberInfo": {
                    "memberId": 4,
                    "nickname": "속석주",
                    "profileImage": faker.image.avatar()
                },
                "isDrinkAlcohol": true,
                "payAgree": "agree",
                "payAmount" : "20000"
            },
        ]
    }



// 영수증
const menuItems = [{menuName: "족발(대)",menuPrice: 62000, quantity: 1},{menuName: "계란찜",menuPrice: 8000, quantity: 1},{menuName: "참이슬",menuPrice: 5000,quantity: 3},{menuName: "카스", menuPrice: 5000, quantity: 2}]
const menuItems2 = [{menuName: "담배",menuPrice: 4000, quantity: 1},{menuName: "라면",menuPrice: 4000, quantity: 1},{menuName: "참이슬",menuPrice: 5000,quantity: 3},{menuName: "카스", menuPrice: 5000, quantity: 2}]
const paymentResult = [{orderMenuId:1, storeName: "(주) 뽕족 강남역본점",address: "서울 강남구 테헤란로4길 15(역삼동)",phone:"010-2839-1132",createdAt: "2024-03-20T11:39:04.663Z",menuItems,totalAmount:95000},
    {orderMenuId:2, storeName: "주전부리",address: "서울 강남구 테헤란로4길 15(역삼동)",phone:"010-2839-1132",createdAt: "2024-03-20T11:39:04.663Z",menuItems2,totalAmount:20000}]


const notification = [
    {notificationId:1 ,message: "40,000원 결제", type: "withdraw", createdAt: "2024-03-20T11:39:04.663Z", readOrNot:false},
    {notificationId:2 ,message: "128,000 입금", type: "deposit", createdAt: "2024-03-19T11:39:04.663Z", readOrNot:false},
    {notificationId:3 ,message: "황재언님이 (주) 뽕족 강남역본점에서 28,000원을 대신 지불했습니다.", type: "instead", createdAt: "2024-03-10T11:39:04.663Z", readOrNot:true},
    {notificationId:4 ,message: "고석주님에게 갚아야 할 금액 23,500원이 남아있습니다.", type: "notification", createdAt: "2024-02-01T11:39:04.663Z" , readOrNot:false},
]
const delay = (ms: number) => new Promise((res) => {
    setTimeout(res, ms);
})

export const handlers = [
    http.post('/members/login', () => {
        console.log('로그인');
        return HttpResponse.json(MeetMembers[1], {
            headers: {
                'Set-Cookie': 'connect.smemberId=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/members/join', async ({ request }) => {
        console.log('회원가입');
        return HttpResponse.text(JSON.stringify('ok'), {
            headers: {
                'Set-Cookie': 'connect.smemberId=msw-cookie;HttpOnly;Path=/;Max-Age=0'
            }
        })
    }),
    http.post('/members/logout', () => {
        console.log('로그아웃');
        return new HttpResponse(null, {
            headers: {
                'Set-Cookie': 'connect.smemberId=;HttpOnly;Path=/;Max-Age=0'
            }
        })
    }),

    http.get('/meet/:memberMeetId', ({ request, params }) => {
        const { memberMeetId} = params;
        return HttpResponse.json(
            MeetMembers
        )
    }),

    http.post('/pay/parties', () => {
        console.log('만남 참여자 설정');
    }),

    http.post('/pay/instead', () => {
        console.log('대신 내주기 설정');

    }),

    http.post('/pay/qr', () => {
        console.log('qr이 생성됨');

    }),

    http.post('/pay/payment/:payId', ({ request, params }) => {
        console.log('결제가 발생');
        const { payId} = params;
    }),

    http.get('/pay/payment/:payId', ({ request, params }) => {
        console.log('결제내역 조회');
        const { payId} = params;
        const result = payId === "1" ? paymentResult[0] : paymentResult[1];
        return HttpResponse.json(
            result
        )
    }),

    http.post('/pay/payback/:insteadId', ({ request, params }) => {
        const { insteadId} = params;
        console.log('이체 요청');
    }),


    http.get('/members/accounts', () => {
        console.log('계좌 가져오기!');
        return HttpResponse.json(
            account
        )
    }),
    http.post('/pay/parties', ({ request}) => {
        console.log('인원을 선택하면 payId를 반환한다.');
        return HttpResponse.json(
            {payId: "4"}
        )
    }),

    http.get('/pay/parties/:payId', ({ request, params }) => {
        const { openerId} = params;
        console.log('참가인원 리턴');
        return HttpResponse.json(
            participantsResult
        )
    }),
    http.get('/members/notification', ({ request }) => {
        console.log('알림 리턴');
        return HttpResponse.json(
            notification
        )
    }),

];
