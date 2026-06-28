import { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

interface GithubProfile {
  login: string
}

const allowedUsers = (process.env.ALLOWED_GITHUB_USERS || '')
  .split(',')
  .map((u) => u.trim())
  .filter(Boolean)

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const githubProfile = profile as GithubProfile | undefined
      if (!githubProfile?.login) return false
      if (allowedUsers.length === 0) return true
      return allowedUsers.includes(githubProfile.login)
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
}
