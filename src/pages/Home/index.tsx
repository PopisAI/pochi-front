import TokenList from "../../components/TokenList"

const Home = () => {
  return (
    <div className="relative isolate">
      <img src="/public/banner.png" alt="Banner" className="w-full h-auto" />
      <div className="absolute left-0 ml-[7%] w-[40%] top-2/5 -translate-y-1/2 p-4 bg-white rounded-lg shadow-lg">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Welcome to PhPop</h1>
          <p className="mt-2 text-lg">Your one-stop solution for meme coins and more!</p>
        </div>
        <input type="text" placeholder="Want to by some tokens?" className="p-2 border border-gray-300 rounded w-full"  />
      </div>
      <div className="m-8">
        <TokenList />
      </div>
    </div>
  )
}

export default Home
// pochi.po