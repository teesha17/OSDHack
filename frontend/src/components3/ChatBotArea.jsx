"use client"

import { useState } from "react"
import Button  from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import Input  from "../components/ui/Input"
import ScrollArea  from "../components/ui/Scroll"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/Avatar"
import { Send } from "lucide-react"

// Simulated architect data
const architects = [
  { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob Smith", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Carol White", avatar: "/placeholder.svg?height=40&width=40" },
]

// Simulated chat messages
const initialMessages = [
  { id: 1, sender: "architect", text: "Hello! How can I help you today?" },
  { id: 2, sender: "user", text: "Hi, I have a question about the project timeline." },
]

export default function ChatBotArea() {
  const [selectedArchitect, setSelectedArchitect] = useState(architects[0])
  const [messages, setMessages] = useState(initialMessages)
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return

    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: "user", text: inputMessage },
    ])

    // Simulate architect response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          sender: "architect",
          text: "Thank you for your message. I'll get back to you shortly with more details about the project timeline.",
        },
      ])
    }, 1000)

    setInputMessage("") // Clear input
  }

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Architects List */}
      <Card className="w-80 h-full rounded-none">
        <CardHeader>
          <CardTitle>Your Architects</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-120px)]">
            {architects.map((architect) => (
              <Button
                key={architect.id}
                variant={selectedArchitect.id === architect.id ? "secondary" : "ghost"}
                className="w-full justify-start mb-2"
                onClick={() => setSelectedArchitect(architect)}
              >
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={architect.avatar} alt={architect.name} />
                  <AvatarFallback>{architect.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                </Avatar>
                {architect.name}
              </Button>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <Card className="flex-1 rounded-none">
          <CardHeader>
            <CardTitle>Chat with {selectedArchitect.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-240px)] pr-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-slate-300"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Input Area */}
        <Card className="rounded-none">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
