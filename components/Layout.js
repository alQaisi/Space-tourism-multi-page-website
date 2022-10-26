import Header from "./header/header";
import { useRouter } from "next/router"

function Layout({children,pageName}) {
    const { pathname }=useRouter();
    return (
        <div className={"container "+(pageName!==undefined?pageName:"")}>
            <Header activeLink={pathname.slice(1)}/>
            {children}
        </div>
    );
}

export default Layout;