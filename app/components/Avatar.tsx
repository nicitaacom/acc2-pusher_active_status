"use client"
import useActiveList from "@/store/useActiveList"

export function Avatar({ user }: { user: string }) {
  const { members } = useActiveList()
  const isActive = members.indexOf(user) !== -1

  return (
    <div>
      {isActive ? (
        <span className="w-4 h-4 roundeed-full bg-green-500"></span>
      ) : (
        <span className="w-4 h-4 roundeed-full bg-gray-500"></span>
      )}
    </div>
  )
}
