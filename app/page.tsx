import { Avatar } from "./components/Avatar"
import { getCookie } from "./utils/helpersSSR"

export default function Home() {
  const user = null // mock null data (if no response from DB - return null)

  const userId = user ? user : getCookie("anonymousId")?.value

  if (!userId) {
    throw new Error("no userId found in page.tsx")
  }

  return (
    <nav className="w-full px-4 py-2 flex justify-between items-center">
      <Avatar user={userId} />
    </nav>
  )
}
