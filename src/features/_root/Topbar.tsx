import {Link, useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {useSignOutAccount} from "@/app/react-query/queriesAndMutations.ts";
import {useEffect} from "react";
import {useUserContext} from "@/app/context/AuthContext.tsx";

const Topbar = () => {
    const {mutate: signOut, isSuccess} = useSignOutAccount();
    const navigate = useNavigate();
    const {user} = useUserContext();

    useEffect(() => {
        if(isSuccess) {
            navigate(0);
        }
    }, [isSuccess]);

    return (
        <section className="topbar">
            <div className="flex-between py-4 px-5">
                <Link to="/" className="flex gap-3 items-center">
                    <img src="/assets/images/logo.svg" alt="Logo" height="34px" width="34px"/>
                    <p className="h2-bold">NexSync</p>
                </Link>

                <div className="flex gap-4">
                    <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut()}>
                        <img src="/assets/icons/logout.svg" alt="Logout"/>
                    </Button>
                    <Link to={`/profile/${user.id}`} className="flex-center gap-3">
                        <img src={user.imageUrl || '/assets/images/profile-placeholder.svg'} alt="Profile" className="h-8 w-8 rounded-full"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Topbar