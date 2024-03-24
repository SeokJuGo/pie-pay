import create from 'zustand';
import {Member, FilterMember} from '@/model/member'



type Store = {
    filterMembers: FilterMember[]
    setFilterMembers: (members: Member[]) => void;
    handleSearchNickname: (searchTerm: string) => void;
    handleType: () => void;
    handleCheck: (memberId: number, property: "isSelected"|"isDrinkAlcohol") => void;
    setHost: (memberId: number) => void;
};

export const useMemberFilter = create<Store>((set) => ({
    filterMembers: [],
    setFilterMembers: (members) => {
        set({ filterMembers: members.map(member => ({
                ...member,
                isDrinkAlcohol: true,
                isTypeAlcohol: false,
                isSelected: true,
                isFiltered: true,
                isHost: false,
            })) });
    },
    handleSearchNickname: (searchTerm) => set((store) => ({
        filterMembers: store.filterMembers.map(member => ({
            ...member,
            isFiltered: member.nickname.toLowerCase().includes(searchTerm.toLowerCase())
        }))
    })),
    handleType: () => set((store) => ({
        filterMembers: store.filterMembers.map(member => ({
            ...member,
            isTypeAlcohol: !member.isTypeAlcohol
        }))
    })),
    handleCheck: (memberId, property) => set((store) => ({
        filterMembers: store.filterMembers.map(member =>
            member.memberId === memberId ? { ...member, [property]: !member[property] } : member
        )
    })),
    setHost: (memberId) => set((store) => ({
        filterMembers: store.filterMembers.map(member => ({
            ...member,
            isHost: member.memberId === memberId ? true : member.isHost
        }))
    }))
}));