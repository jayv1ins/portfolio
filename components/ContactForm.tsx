'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows={4} />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
        Send Message
      </button>
    </form>
  )
}
