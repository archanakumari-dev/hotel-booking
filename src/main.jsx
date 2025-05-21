
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

console.log(import.meta.env)
console.log(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)
console.log(import.meta.env.VITE_TEST_VAR);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter basename='/hotel-booking'>
       <App />
    </BrowserRouter>,
  </ClerkProvider>
  
)
