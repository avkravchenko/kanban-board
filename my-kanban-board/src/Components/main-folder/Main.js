import React, { useState } from "react";
import './main.scss'
import Column1 from "./columns-folder/Column1";
import Column2 from "./columns-folder/Column2";
import Column3 from "./columns-folder/Column3";
import Column4 from "./columns-folder/Column4";

const Main = ({taskInWork, taskFinished, amountInWork}) => {
    const [giveSelectedArray, setGiveSelectedArray] = useState()

    const getSelectedArray = (selectedArray) => {
        setGiveSelectedArray(selectedArray)
    }

    return (
        <>
            <main>
                <div className="main__content">
                    <Column1  taskInWork={taskInWork} giveSelectedArray={giveSelectedArray} id={"1"}  title={"Backlog"} />
                    <Column2 amountInWork={amountInWork} giveSelectedArray={giveSelectedArray} getSelectedArray={getSelectedArray}  id={"2"}  title={"Ready"} />
                    <Column3 giveSelectedArray={giveSelectedArray} getSelectedArray={getSelectedArray} id={"3"}  title={"In progress"} />
                    <Column4 taskFinished={taskFinished} giveSelectedArray={giveSelectedArray} getSelectedArray={getSelectedArray} id={"4"}  title={"Finished"} />
                </div>
            </main>
        </>
    )
}



export default Main

