import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
      const sortArr = sort.split(' ')
        if(sort && sortArr.length === 1) {
            return [...posts].sort((a, b) => a[sortArr[0]].localeCompare(b[sortArr[0]]))
        } else if(sort && sortArr.length === 2) {
            return [...posts].sort((a, b) => b[sortArr[0]].localeCompare(a[sortArr[0]]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const useFilterSort = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}