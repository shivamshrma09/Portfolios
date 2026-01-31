'use client'
import React, { useState } from 'react'
import { FaLinkedinIn, FaGithub, FaXTwitter, FaMedium } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

interface ConnectCardProps {
  isOpen: boolean
  onClose: () => void
}

const ConnectCard: React.FC<ConnectCardProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/shivam-kumar-321810324/', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/shivamshrma09', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: FaXTwitter, url: 'https://x.com/Vsion09', color: 'hover:text-blue-400' },
    { name: 'Medium', icon: FaMedium, url: 'https://medium.com/@vsion09', color: 'hover:text-green-500' }
  ]

  const handleSend = async () => {
    if (message.trim() && !isLoading) {
      setIsLoading(true)
      try {
        const response = await fetch('/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        })

        if (response.ok) {
          setMessage('')
          alert('Message sent successfully!')
          onClose()
        } else {
          alert('Failed to send message. Please try again.')
        }
      } catch (error) {
        alert('Error sending message. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 w-96 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          <IoClose size={24} />
        </button>
        
        <h3 className="text-white text-xl font-semibold mb-6">Connect with me</h3>
        
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-neutral-800 rounded-full text-white transition-colors ${link.color}`}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        
        <div className="space-y-4">
          <p className="text-neutral-300 text-sm">Write your message:</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 resize-none h-24 focus:outline-none focus:border-neutral-500"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !message.trim()}
            className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectCard