import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/crew.module.scss";
import Image from "next/image";
import Crews from "../json/crew.json";
import { useState } from "react";

function Crew() {
    const [selectedPerson,setSelectedPerson]=useState(0);
    return (
        <Layout pageName={"crew"}>
            <Head>
                <title>Crew</title>
            </Head>
            <div className={styles.container}>
                <h4 className="heading four"><span className="sectionNumber">02</span> MEET YOUR CREW </h4>
                <div className={styles.contentContainer}>
                    <div className={styles.textInfoContainer}>
                        <div className={styles.dots}>
                            <span onClick={()=>setSelectedPerson(0)} className={selectedPerson===0?styles.active:""}/>
                            <span onClick={()=>setSelectedPerson(1)} className={selectedPerson===1?styles.active:""}/>
                            <span onClick={()=>setSelectedPerson(2)} className={selectedPerson===2?styles.active:""}/>
                            <span onClick={()=>setSelectedPerson(3)} className={selectedPerson===3?styles.active:""}/>
                        </div>
                        <div className={styles.info}>
                            <p className="subHeading one light">{Crews[selectedPerson].title}</p>
                            <h3 className="heading three">{Crews[selectedPerson].name}</h3>
                            <p className="text">{Crews[selectedPerson].text}</p>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image priority src={`/assets/crew/${Crews[selectedPerson].image}`} width={"100%"} height={"100%"} layout="responsive"  alt=""/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Crew;