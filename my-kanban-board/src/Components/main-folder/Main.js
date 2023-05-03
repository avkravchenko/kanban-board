import React from "react";
import './main.scss'
import Column from "./columns-folder/Column";

const columns = [
    {title: "Backlog", id: "1"},
    {title: "Ready", id: "2"},
    {title: "In Progress", id: "3"},
    {title: "Finished", id: "4"},
]


const Main = () => {
    return (
        <>
            <main>
                <div className="main__content">
                    {columns.map(column => {
                        return (
                            <Column id={column.id} key={column.id} title={column.title} />
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Main