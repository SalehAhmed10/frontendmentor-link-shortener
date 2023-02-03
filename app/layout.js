"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import { ThemeProvider } from 'next-themes'
// react-hot-toast is a toast notification library



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}

        </ThemeProvider>
      </body>
    </html>
  )
}
