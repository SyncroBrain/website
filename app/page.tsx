import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Architecture from '@/components/Architecture'
import Comparison from '@/components/Comparison'
import Industries from '@/components/Industries'
import Ecosystem from '@/components/Ecosystem'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <Comparison />
        <Industries />
        <Ecosystem />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
