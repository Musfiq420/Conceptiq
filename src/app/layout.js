import './globals.css'

export const metadata = {
  title: 'Next.js + Tailwind Starter',
  description: 'A beautiful Next.js starter template with Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-textPrimary antialiased">
        {children}
      </body>
    </html>
  )
}