import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coobook',
  description: 'M25 class cookbook',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-stone-500 text-stone-50 flex justify-center h-screen mx-4 mt-4 sm:mx-auto"}>{children}</body>
    </html>
  )
}
