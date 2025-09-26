import { env } from 'node:process'
import React from 'react'

export default function Home() {
  return (
    <div className="text-yellow-600">{env.BETTER_AUTH_URL}</div>
  )
}
