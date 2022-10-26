import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/technology.module.scss";
import Technologies from "../json/technologies.json";
import { useState } from "react";

function Technology() {
    const [selectedTechnology,setSelectedTechnology]=useState(0);
    return (
        <Layout pageName={"technology"}>
            <Head>
                <title>Technology</title>
            </Head>
            <div className={styles.container}>
                <h4 className="heading four"><span className="sectionNumber">03</span> SPACE LAUNCH 101</h4>
                <div className={styles.contentContainer}>
                    <div className={styles.infoContainer}>
                        <div className={styles.technologiesNum}>
                            <span onClick={()=>setSelectedTechnology(0)} className={"subHeading one "+(selectedTechnology===0?styles.active:"")}>1</span>
                            <span onClick={()=>setSelectedTechnology(1)} className={"subHeading one "+(selectedTechnology===1?styles.active:"")}>2</span>
                            <span onClick={()=>setSelectedTechnology(2)} className={"subHeading one "+(selectedTechnology===2?styles.active:"")}>3</span>
                        </div>
                        <div className={styles.textContainer}>
                            <p className="subHeading one textColor">THE TERMINOLOGY…</p>
                            <h3 className="heading three">{Technologies[selectedTechnology].name}</h3>
                            <p className="text">{Technologies[selectedTechnology].text}</p>
                        </div>
                    </div>
                    <div className={styles.imageContainer+" "+styles[Technologies[selectedTechnology].class]}>
                        <div/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Technology;