import React from 'react'
import Chats from './ _chat-components/chats'
import ChatArea from './ _chat-components/chat-area'
import { Separator } from '@/components/ui/separator'

function Home() {
  return (
    <div className='flex h-[85vh]'>
        <Chats/>
        <Separator orientation='vertical'/>
        <ChatArea/>
    </div>
  )
}

export default Home