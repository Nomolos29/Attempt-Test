import { MenuItem } from "@/lib/nav-links";
import ListItem from "../utilities/ListItem";

interface NavCardProps {
    navItems: MenuItem[];
    title: string;
}

const NavCard: React.FC<NavCardProps> = ({navItems, title}) => {
  return (
    <main className="relative w-fit">
        <div className="bg-white shadow-md z-50 text-black rounded-lg p-7 flex flex-col w-[600px] gap-y-7">
            <h4 className="text-[#97A3B7] uppercase font-semibold">{title}</h4>

            <div className="flex w-full justify-between flex-wrap gap-y-5">
                {navItems.map((navItem, index) => (
                    <ListItem
                        key={index}
                        className="w-1/2"
                        icon={<span className="flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[#D8F0AE]">{index + 1}</span>}
                        title={navItem.navtitle}
                        description={navItem.navDetail}
                    />
                ))}
            </div>

            <div className="absolute p-[20px] bg-white -top-[10px] right-[45%] rotate-45 rounded-sm"></div>
        </div>
    </main>
  )
}

export default NavCard