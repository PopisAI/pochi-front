interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex flex-col mt-20">{children}</div>
}

export default Layout
