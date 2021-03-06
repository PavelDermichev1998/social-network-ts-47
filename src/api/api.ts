import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'bf05589b-7ecb-4b86-808b-a9d624d9fb02'
    }
})
export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    follow(userId: number) {
        return(
        instance.post(`follow/${userId}`))
    },
    unfollow(userId: number) {
        return (
        instance.delete(`follow/${userId}`))
    },
    getProfile(userId: string) {
        return(
            instance.get(`profile/` + userId)
        )
    },
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}