'use client'

import useUserStore from "@/store/store-dos"

function CreateGroupPage() {

  const state = useUserStore(state => state)

  return (
    <div className="p-10">
        <h1 className="text-sm">{state.currentUserData.name}</h1>
    </div>
  )
}

export default CreateGroupPage