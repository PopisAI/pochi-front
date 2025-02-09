import TokensCarousel from '@/components/token/TokensCarousel'
import TokensList from '@/components/token/TokensList'
import { AIIcon } from '@/icons'

const Home = () => {
  return (
    <div className="w-full mb-48">
      <div className="relative isolate">
        <div className="flex justify-center bg-[#0b0d0f] w-Full mt-14 sm:mt-0 max-h-[60vh] overflow-hidden">
          <img src="/banner.png" alt="Banner" className="w-full md:w-[80%] h-auto -pt-5" />
        </div>
        <div className="card absolute left-0 ml-[10%] md:ml-[15%] lg:ml-[18%] w-[40%] md:w-[30%] top-2/5 md:top-4/7 -translate-y-1/4 p-0 md:-translate-y-1/2 md:p-2 bg-base-100">
          <div className="card-body items-center text-center p-2 sm:p-4">
            <h1 className="card-title max-[380px]:text-md sm:block sm:text-lg md:text-xl lg:text-2xl">
              Welcome to Pochi.po
            </h1>
            <p className="mt-2 text-xs hidden sm:block md:text-sm lg:text-md">
              Engage with our agent to keep track of the current and the next meme coins!
            </p>
            <div className="card-actions">
              <a
                href="https://x.com/PochiPo1589473"
                target="_blank"
                className="btn btn-secondary max-[380px]:btn-xs md:btn-sm truncate"
              >
                PochiPO Insights
                <AIIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl mx-8 mt-6 mb-4">Pochi Recomended</h2>
      <TokensCarousel />
      <div className="m-8">
        <TokensList />
      </div>
    </div>
  )
}

export default Home
