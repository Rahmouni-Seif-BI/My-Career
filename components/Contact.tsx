"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations, useLocale } from "@/lib/i18n-client"

export default function Contact() {
  const { locale } = useLocale()
  const { t } = useTranslations(locale)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: t('contact.success')
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || t('contact.error')
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: t('contact.error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">{t('contact.title')}</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            placeholder={t('contact.placeholder.name')}
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder={t('contact.placeholder.email')}
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="mb-4">
          <Textarea
            name="message"
            placeholder={t('contact.placeholder.message')}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        
        {/* Status Message */}
        {submitStatus.type && (
          <div className={`mb-4 p-3 rounded-md ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t('contact.send') + '...' : t('contact.send')}
        </Button>
      </form>
    </section>
  )
}

