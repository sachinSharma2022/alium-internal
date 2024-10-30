import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Icons } from "@/components/ui/icon"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import QuestionContent from '@/components/layout/questionContent'
import QuestionActionBar from '../questionActionBar'


const QuestionHeader = () => {
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
                    <TabList className="*:px-5 *:py-2 *:rounded-lg *:font-semibold *:text-gray-light space-x-2">
                        <Tab className="data-[selected]:bg-primary-red data-[selected]:text-primary-blue focus:outline-none">Create</Tab>
                        <Tab className="data-[selected]:bg-primary-red data-[selected]:text-primary-blue focus:outline-none">Share</Tab>
                        <Tab className="data-[selected]:bg-primary-red data-[selected]:text-primary-blue focus:outline-none">Results</Tab>
                    </TabList>
                    <div>
                        <Button variant="blueBtn" size="sm">
                            Next: Survey Type
                        </Button>
                    </div>
                </div>

                <TabPanels className="bg-white mt-[92px] w-full">
                    <TabPanel className="flex justify-between items-center bg-white-smoke">
                        <QuestionContent>
                            <QuestionActionBar
                                previewBtn="Preview"
                                saveAsDraftsBtn="Save as Draft"
                            />
                        </QuestionContent>
                    </TabPanel>
                    <TabPanel>Content 2</TabPanel>
                    <TabPanel>Content 3</TabPanel>
                </TabPanels>
            </TabGroup>

        </>

    )
}
export default QuestionHeader