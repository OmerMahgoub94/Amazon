import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            // clientId: process.env.GOOGLE_ID,
            clientId: "53608080713-j1av8tp5nqiuv9dqidel7ruj5b699d35.apps.googleusercontent.com",
            // clientSecret: process.env.GOOGLE_SECRET
            clientSecret: "wFaQCcIwPuVxLNNqXz8Edlm3"
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
})