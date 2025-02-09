interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex flex-col items-center mt-20 mb-48 w-full">{children}</div>
}

export default Layout
