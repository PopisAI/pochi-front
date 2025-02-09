import TokensCarousel from '@/components/token/TokensCarousel'
import TokensList from '@/components/token/TokensList'
import { AIIcon } from '@/icons'

const Home = () => {
  return (
    <div className="w-full mb-48">
      <div className="relative isolate">
        <img src="/banner.png" alt="Banner" className="w-full mt-14 sm:mt-0 h-auto" />
        <div className="card absolute left-0 ml-[7%] w-[40%] top-2/5 -translate-y-1/4 p-0 md:-translate-y-1/2 md:p-4 bg-base-100">
          <div className="card-body items-center text-center p-2 sm:p-4">
            <h1 className="card-title max-[380px]:text-md sm:block sm:text-xl md:text-2xl lg:text-3xl">
              Welcome to Pochi.po
            </h1>
            <p className="mt-2 text-sm hidden sm:block md:text-md lg:text-lg">
              Engage with our agent to keep track of the current and the next meme coins!
            </p>
            <div className="card-actions">
              <a
                href="https://x.com/PochiPo1589473"
                target="_blank"
                className="btn btn-secondary max-[380px]:btn-xs"
              >
                PochiPO Insights
                <AIIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl mx-8 mt-8 mb-4">Pochi Recomended</h2>
      <TokensCarousel />
      <div className="m-8">
        <TokensList />
      </div>
    </div>
  )
}

export default Home
