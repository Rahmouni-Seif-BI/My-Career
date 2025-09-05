"use client"

import { useRouter, usePathname } from 'next/navigation'
import { translations, locales, type Locale } from './i18n'

// Hook to get translations (client-side)
export function useTranslations(locale: Locale = 'en') {
  const getTranslation = (key: string): string => {
    // Handle special cases for skills with dots and special characters
    if (key.startsWith('skills.skills.')) {
      const skillKey = key.replace('skills.skills.', '')
      const localeTranslations = translations[locale] as Record<string, unknown>
      const skills = localeTranslations?.skills as Record<string, unknown> | undefined
      const skillsObj = skills?.skills as Record<string, string> | undefined
      if (skillsObj && skillKey in skillsObj) {
        return skillsObj[skillKey]
      }
      // Fallback to English
      const enTranslations = translations.en as Record<string, unknown>
      const enSkills = enTranslations?.skills as Record<string, unknown> | undefined
      const enSkillsObj = enSkills?.skills as Record<string, string> | undefined
      if (enSkillsObj && skillKey in enSkillsObj) {
        return enSkillsObj[skillKey]
      }
      return skillKey
    }
    
    const keys = key.split('.')
    let value: string | Record<string, unknown> = translations[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k] as string | Record<string, unknown>
      } else {
        // Fallback to English if translation not found
        value = translations.en
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey] as string | Record<string, unknown>
          } else {
            return key // Return key if translation not found
          }
        }
      }
    }
    
    return typeof value === 'string' ? value : key
  }
  
  return { t: getTranslation, locale }
}

// Hook to get current locale and change it (client-side)
export function useLocale() {
  const router = useRouter()
  const pathname = usePathname()

  // Extract locale from pathname (e.g., /fr/..., /en/...)
  let locale: Locale = 'en'
  if (pathname) {
    const pathLocale = pathname.split('/')[1]
    if (locales.includes(pathLocale as Locale)) {
      locale = pathLocale as Locale
    }
  }

  const changeLocale = (newLocale: Locale) => {
    if (!pathname) return
    const segments = pathname.split('/')
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }
    const newPath = segments.join('/') || '/'
    router.push(newPath)
  }

  return {
    locale,
    locales: Array.from(locales),
    defaultLocale: 'en' as Locale,
    changeLocale,
  }
} 