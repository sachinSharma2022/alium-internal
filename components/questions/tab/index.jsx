import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Icons } from "@/components/ui/icon"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SecondaryLayout from '@/components/layout/secondaryLayout'


const Tabs = () => {
    return (
        <>
            <TabGroup className="flex items-center justify-between flex-col w-full">
                <div className="flex items-center justify-between w-full bg-white fixed h-[92px] px-6 py-[26px] border-b border-borderPrimary">
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
                        <TabList>
                            <Tab>Tab 1</Tab>
                            <Tab>Tab 2</Tab>
                            <Tab>Tab 3</Tab>
                        </TabList>
                    <div>
                        <Button variant="blueBtn" size="sm">
                            Next: Survey Type
                        </Button>
                    </div>
                </div>
               
                <TabPanels className="bg-white mt-[92px] w-full">
                    <TabPanel className="flex justify-between items-center bg-white-smoke">
                                <SecondaryLayout>
                                    Lorem, ipsum dolor sit amet consectetur 
                                </SecondaryLayout>
                        </TabPanel>
                        <TabPanel>Content 2</TabPanel>
                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
            </TabGroup>
           
        </>

    )
}
export default Tabs