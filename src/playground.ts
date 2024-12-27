import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'prodmail@sd.se',
        firstName: 'prod',
        lastName: 'prod',

    }
})

console.log('prod done')
