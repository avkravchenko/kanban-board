import React, { useEffect, useState } from "react";
import './main.scss'
import Column1 from "./columns-folder/Column1";
import uuid from "react-uuid";
import Column2 from "./columns-folder/Column2";

/* const columns = [
    {title: "Backlog", id: "1"},
    {title: "Ready", id: "2"},
    {title: "In Progress", id: "3"},
    {title: "Finished", id: "4"},
] */


const Main = () => {

    return (
        <>
            <main>
                <div className="main__content">
                    <Column1  id={"1"}  title={"Backlog"} />
                    <Column2  id={"2"}  title={"Ready"} />
                    {/* <Column3 id={"3"} key={uuid()} title={"In Progress"} />
                    <Column4 id={"4"} key={uuid()} title={"Finished"} /> */}
                </div>
            </main>
        </>
    )
}

export default Main