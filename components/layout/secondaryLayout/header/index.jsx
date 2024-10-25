import { Icons } from "@/components/ui/icon"
import Link from "next/link"

const Header = () => {
    return (
        <div className="h-[92px] px-6 py-[26px] flex items-center">
            <div>
                <ul className="flex items-center">
                    <li>
                        <Link href="#" className="flex gap-2">
                            <Icons.workspace className="text-black-primary" />
                            Workspace 1
                        </Link>
                    </li>
                    <li>
                        <Icons.arrowDown className="text-gray-light -rotate-90 w-4 h-4 mx-4" />
                    </li>
                    <li>
                        <Link href="#" className="truncate overflow-hidden whitespace-nowrap w-48 block">
                            This is an example for the Survey Title.
                        </Link>
                    </li>
                </ul>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Header