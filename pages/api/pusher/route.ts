import { NextApiRequest, NextApiResponse } from "next"

import { pusherServer } from "@/libs/pusher"
import { getCookie } from "@/utils/helpersSSR"

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const user = null // mock null data (if no response from DB - return null)

  const userId = user ? user : getCookie("anonymousId")?.value
  console.log(10, "userId - ", userId)

  if (!userId) {
    console.log(13, "ERROR_NO_USER_FOUND - ", userId)
    throw new Error("No userId found in pages/api/pusher/route.ts")
  }

  const socketId = request.body.socket_id
  const channel = request.body.channel_name
  const data = {
    user_id: userId,
  }

  const authResponse = pusherServer.authorizeChannel(socketId, channel, data)
  return response.send(authResponse)
}
