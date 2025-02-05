import TokensCarousel from '@/components/TokensCarousel'
import TokensList from '@/components/TokensList'

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative isolate">
        <img src="/banner.png" alt="Banner" className="w-full h-auto" />
        <div className="card absolute left-0 ml-[7%] w-[40%] top-2/5 -translate-y-1/2 p-4 bg-base-100">
          <div className="card-body">
            <h1 className="card-title text-3xl">Welcome to Pochi.po</h1>
            <p className="mt-2 text-lg">Engage with our agent to keep track of the current and the next meme coins!</p>
            <div className="card-actions">
              <button className="btn btn-secondary">Chat with Pochi</button>
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