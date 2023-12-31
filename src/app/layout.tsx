import './globals.css'

export const metadata = {
  title: 'Unscramble!',
  description: 'Unscramble the movie names',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://cdn.lineicons.com/4.0/lineicons.css'
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
