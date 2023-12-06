import PostForm from "@/app/common/form/PostForm.tsx";
import {useParams} from "react-router-dom";
import {useGetPostById} from "@/app/react-query/queriesAndMutations.ts";
import Loader from "@/app/layout/Loader.tsx";

const EditPost = () => {
    const {id} = useParams();
    const {data: post, isPending} = useGetPostById(id as string);

    if (isPending) return <Loader/>

    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="max-w-5xl flex-start gap-3 justify-start w-full">
                    <img src="/assets/icons/add-post.svg" alt="edit" width={36} height={36}/>
                    <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
                </div>

                <PostForm action="Update" post={post}/>
            </div>
        </div>
    )
}

export default EditPost