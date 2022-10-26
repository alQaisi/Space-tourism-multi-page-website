import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/destination.module.scss";
import Image from "next/image";
import { useState } from "react";
import Destinations from "../json/destination.json";

function Destination() {
    const [selectedDestination,setSelectedDestination]=useState("moon");
    return(
        <Layout pageName={"destination"}>
            <Head>
                <title>Destination</title>
            </Head>
            <div className={styles.container}>
                <h4 className="heading four"><span className="sectionNumber">01</span> PICK YOUR DESTINATION</h4>
                <div className={styles.contentContainer}>
                    <Image src={`/assets/destination/${Destinations[selectedDestination].image}`} width="445" height="445" alt={Destinations[selectedDestination].name}/>
                    <div className={styles.info}>
                        <nav>
                            <p onClick={()=>setSelectedDestination("moon")} className={"navText "+(selectedDestination==="moon"?styles.active:"")}>MOON</p>
                            <p onClick={()=>setSelectedDestination("mars")} className={"navText "+(selectedDestination==="mars"?styles.active:"")}>MARS</p>
                            <p onClick={()=>setSelectedDestination("europa")} className={"navText "+(selectedDestination==="europa"?styles.active:"")}>EUROPA</p>
                            <p onClick={()=>setSelectedDestination("titan")} className={"navText "+(selectedDestination==="titan"?styles.active:"")}>TITAN</p>
                        </nav>
                        <h1 className="heading two">{Destinations[selectedDestination].name}</h1>
                        <p className="text">{Destinations[selectedDestination].text}</p>
                        <div className={styles.destance}>
                            <h3 className="heading four">
                                <span className="subHeading two">AVG. DISTANCE</span>
                                {Destinations[selectedDestination].destance}
                            </h3>
                            <h3 className="heading four">
                                <span className="subHeading two">EST. TRAVEL TIME</span>
                                {Destinations[selectedDestination].travelTime}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Destination;