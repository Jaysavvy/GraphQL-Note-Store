import { builder } from "../builder";

builder.prismaObject("Message", {
    fields: (t) => ({
        id: t.exposeID("id"), 
        body: t.exposeString("name"),
        createdAt: t.expose("createdAt", {
            type: "Date",
        })
    })
})