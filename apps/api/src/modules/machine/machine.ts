import { createResource } from "@/core/createResource";
const machine = createResource({
    name: "machines",
    model: prisma.machine,
    createSchema: {},
    updateSchema: {},
});

await machine.service.findAll();