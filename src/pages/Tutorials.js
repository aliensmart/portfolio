import React from 'react';
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";

const Tutorials = ()=>{
    return(
        <Layout>
            <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
                    <div className="container">
                            <Sectiontitle title="Tutorials" />
                            <div className="row mt-30-reverse">
                                My tuts
                            </div>
                    </div>
            </div>
        </Layout>
    )
}

export default Tutorials;