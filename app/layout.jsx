import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental Property',
  description: 'Find your dream rental property',
  keywords: 'rental. find rentals, find properties'
}


const MainLayout = ({ children}) => {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}

export default MainLayout;