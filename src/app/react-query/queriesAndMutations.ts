import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query'
import {createUserAccount, signInAccount, signOutAccount} from "@/app/appwrite/api.ts";
import {INewUser} from "@/app/models";

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string; }) => signInAccount(user),
    })
}

export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount
    })
}