const tokens = [
  { name: 'PhPop', symbol: 'PHPOP', price: '0.0001', h24: '+0.2%' },
  { name: 'Pepe', symbol: 'PEPE', price: '0.02', h24: '+0.1%' },
  { name: 'Other', symbol: 'PHPOP', price: '0.5', h24: '-0.2%' },
]

const TokenList = () => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {tokens.map((token) => (
        <li key={token.symbol} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              alt=""
              src={'/vite.svg'}
              className="size-12 flex-none rounded-full bg-gray-50"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{token.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{token.symbol}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{`$${token.price}`}</p>
            {token.h24 ? (
              <p className="mt-1 text-xs/5 text-gray-500">24H: {token.h24}</p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="size-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs/5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TokenList
