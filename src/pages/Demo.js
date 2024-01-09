import React from 'react';
import Layout from '@theme/Layout';
import Gantt from "free-react-gantt";
import {fakeData} from "free-react-gantt/src/constants/ganttUtils";
import 'free-react-gantt/dist/style.css'
const Demo = () => {
    return (
        <Layout>
            <main>
                <h1 className={'demo-title'}>Démo Free React Gantt</h1>
                <Gantt data={fakeData}/>
            </main>
        </Layout>
    );
};

export default Demo;
