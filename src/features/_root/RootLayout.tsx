import Topbar from "./Topbar.tsx";
import LeftSidebar from "@/features/_root/LeftSidebar.tsx";
import {Outlet} from "react-router-dom";
import Bottombar from "./Bottombar.tsx";

const RootLayout = () => {
    return (
        <div className="w-full md:flex">
            <Topbar />
            <LeftSidebar/>

            <section className="flex flex-1 h-full">
                <Outlet/>
            </section>

            <Bottombar/>
        </div>
    )
}

export default RootLayout;