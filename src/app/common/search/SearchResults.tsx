import {Models} from "appwrite";
import Loader from "@/app/layout/Loader.tsx";
import GridPostList from "@/app/common/search/GridPostList.tsx";

interface SearchResultsProps{
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}
const SearchResults = ({isSearchFetching, searchedPosts} : SearchResultsProps) => {
    if (isSearchFetching) return <Loader/>

    if (searchedPosts && searchedPosts.documents.length > 0) {
        return (
            <GridPostList posts={searchedPosts.documents}/>
        )
    }
    return (
        <p className="text-light-4 mt-10 text-center w-full">
            No results found
        </p>
    )
}

export default SearchResults