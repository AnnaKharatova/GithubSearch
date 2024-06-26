import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUsersRespons, IUser, IRepo } from '../../models/models'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/',
        // headers: { }
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `/search/users`,
                params: {
                    q: search, 
                    per_page: 10,
                } 
            }),
            transformResponse: (response: IUsersRespons<IUser>) => response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    })
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi