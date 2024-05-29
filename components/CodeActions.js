"use server"

import {db} from "@/db"
import {actions} from "@/db/schema"

async function fetchActions() {
    return db.select().from(actions).all()
}

export default async function CodeActions() {
    const actions = await fetchActions()
    return (
        <div className={"flex w-full justify-center content-center"}>
            <h1>code actions: {actions.length}</h1>
            {actions.map((action) => (
                <div key={action.id}>{action.id}</div>
            ))}
        </div>
    )
}