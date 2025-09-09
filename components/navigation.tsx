import NavItem from "./NavItem"

export default function Navigation() {
  return (
    <nav className="font-mono relative">
      <ul className="flex md:space-x-6 cursor-pointer md:flex-row min-w-[80px] text-center">
        <NavItem 
          href="/" 
          label="Home" 
          bgColor="bg-yellow-100" 
          borderColor="border-yellow-200" 
          rotate="-rotate-2" 
        />
        <NavItem 
          href="/about" 
          label="About" 
          bgColor="bg-blue-100" 
          borderColor="border-blue-100" 
          rotate="rotate-1" 
        />
        <NavItem 
          href="/about/projects" 
          label="Projects" 
          bgColor="bg-green-100" 
          borderColor="border-green-100" 
          rotate="rotate-2" 
        />
      </ul>
    </nav>
  )
}