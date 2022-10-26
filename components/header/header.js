import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import { useState } from "react";

function Header({activeLink}){
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    return(
        <header className={styles.header}>
            <Image className={styles.img} src="/assets/shared/logo.svg" width={48} height={48} alt="logo"/>
            <nav className={styles.nav+" "+(isMenuOpen?styles.activeMenu:"")}>
                <svg onClick={()=>setIsMenuOpen(!isMenuOpen)} className={styles.close} xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
                <Link href="/"><a className={"navText "+(activeLink==="" && styles.acitve)}> <span>00</span> HOME </a></Link>
                <Link href="/destination"><a className={"navText "+(activeLink==="destination" && styles.acitve)}> <span>01</span> DISTINATION </a></Link>
                <Link href="/crew"><a className={"navText "+(activeLink==="crew" && styles.acitve)}> <span>02</span> CREW </a></Link>
                <Link href="/technology"><a className={"navText "+(activeLink==="technology" && styles.acitve)}> <span>03</span> TECHNOLOGY </a></Link>                
            </nav>
            <svg onClick={()=>setIsMenuOpen(!isMenuOpen)} className={styles.menu} xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
        </header>
    );
}

export default Header;