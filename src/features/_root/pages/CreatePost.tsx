import PostForm from "@/app/common/form/PostForm.tsx";

const CreatePost = () => {
    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="max-w-5xl flex-start gap-3 justify-start w-full">
                    <img src="/assets/icons/add-post.svg" alt="add" width={36} height={36}/>
                    <h2 className="h3-bold md:h2-bold text-left w-full">Creat Post</h2>
                </div>
            </div>

            <PostForm/>
        </div>
    )
}

export default CreatePost