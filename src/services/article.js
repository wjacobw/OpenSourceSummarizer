import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_KEY;
console.log(1)
export const articleApi = createApi( {
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/', 
prepareHeaders: (headers) => {
headers.set('X-RapidAPI-Key', 
'7774cb4961msh1657901529b28c8p190234jsn31508fe7569a');
headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
return headers;
}}),
    
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 
            `/summarize?url=${encodeURIComponent(params.articleUrl)}`
        })
    })
})
console.log(2)

export const {useLazyGetSummaryQuery} = articleApi;