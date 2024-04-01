// Zustand를 사용하여 소켓 통신 상태를 관리하는 파일 (socketStore.ts)
import create from 'zustand';
import * as Stomp from "@stomp/stompjs";

import { Payment } from '@/model/participant';
import { usePayment } from '@/store/usePayment';
interface ParticipantSocketResProps {
  payId:number;
  participantId:number;
  payAgree:boolean;
  payStatus: "OPEN" | "ING" | "COMPLETE" | "CLOSE";
}

type InitType = {
  agreeTrue: number[];
  agreeFalse: number[];
};

type SocketState = {
  client: Stomp.Client | null;
  payment: Payment | null;
  connect: (payId: number) => void;
  send: (payId:number, participantId:number, payAgree:boolean) => void;
  instead: (payId:number, borrowerId:number, lenderId:number) => void;
  init : (payId:number) => void;
  initRes: InitType | null;
  initiating: boolean;
  res: ParticipantSocketResProps | null;

};

export const usePaymentSocket = create<SocketState>((set) => ({
  client: null,
  payment: null,
  res: null,
  initRes: null,
  initiating: false,
  connect: (payId: number) => {
    const clientdata = new Stomp.Client({
      brokerURL: `wss://j10a402.p.ssafy.io/pay`,
      connectHeaders: {},
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    clientdata.onConnect = function () {
      set((state) => ({ ...state, initiating: true }));
      clientdata.subscribe(`/api/sub/${payId}`, (message: any) => {
        const res = JSON.parse(message.body);
        console.log(res);
        set((state) => ({ ...state, res }));
      });

      clientdata.subscribe(`/api/sub/initialData/${payId}`, (message: any) => {
        const initRes = JSON.parse(message.body);
        set((state) => ({ ...state, initRes }));
      });
    };

    clientdata.activate();
    set((state) => ({ ...state, client: clientdata }));
  },
  send: (payId:number, participantId:number, payAgree:boolean) => {
    console.log(payId+" "+participantId+" " +payAgree)
    set((state) => {
      if (state.client) {
        state.client.publish({
          destination: `/api/pub/agree`,
          body: JSON.stringify({
            payId:payId,
            participantId: participantId,
            payAgree: payAgree,
          }),
        });
      }
      return state;
    });
  },
  instead: (payId: number, borrowerId:number, lenderId:number) => {
    set((state) => {
      if (state.client) {
        state.client.publish({
          destination: "/api/pub/instead-res",
          body: JSON.stringify({
            payId: payId,
            borrowerId: borrowerId,
            lenderId: lenderId,
          }),
        });
      }
      return state;
    });
  },
  init: (payId:number) => {
    set((state) => {
      if (state.client) {
        state.client.publish({
          destination: `/api/pub/initialData/${payId}`,
        });
      }
      return state;
    });
  },
}));
