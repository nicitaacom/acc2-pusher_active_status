import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "./components/Layout"
import { ActiveStatus } from "./components/ActiveStatus"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "codesandbox project",
  description: "description",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
          <ActiveStatus />
        </Layout>
      </body>
    </html>
  )
}
