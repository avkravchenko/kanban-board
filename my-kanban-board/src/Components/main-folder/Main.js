import React, { useEffect, useState } from "react";
import './main.scss'
import Column1 from "./columns-folder/Column1";
import uuid from "react-uuid";
import Column2 from "./columns-folder/Column2";
import Column3 from "./columns-folder/Column3";

/* const columns = [
    {title: "Backlog", id: "1"},
    {title: "Ready", id: "2"},
    {title: "In Progress", id: "3"},
    {title: "Finished", id: "4"},
] */


const Main = () => {
    const [giveSelectedArray, setGiveSelectedArray] = useState()

    const getSelectedArray = (selectedArray) => {
        setGiveSelectedArray(selectedArray)
    }

    return (
        <>
            <main>
                <div className="main__content">
                    <Column1 giveSelectedArray={giveSelectedArray} id={"1"}  title={"Backlog"} />
                    <Column2 giveSelectedArray={giveSelectedArray} getSelectedArray={getSelectedArray}  id={"2"}  title={"Ready"} />
                    <Column3 giveSelectedArray={giveSelectedArray} getSelectedArray={getSelectedArray} id={"3"}  title={"In progress"} />
                    {/* <Column3 id={"3"} key={uuid()} title={"In Progress"} />
                    <Column4 id={"4"} key={uuid()} title={"Finished"} /> */}
                </div>
            </main>
        </>
    )
}

export default Main

