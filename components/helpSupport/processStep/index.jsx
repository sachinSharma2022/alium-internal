import React from 'react'
import Image from 'next/image'

const ProcessStep = ({ stepNumber, discription, stepImg, imgAlt, caption, isLastStep }) => {
    return (
        <>
            {/* Timeline - 1 */}

            <li className="relative z-20 flex items-baseline pb-10">
                {
                    !isLastStep && (
                        <div className="before:absolute before:left-[19.5px] before:h-full before:w-[2px] before:bg-american-silver before:-z-10">
                        </div>
                    )
                }
                <span className="w-[40px] h-[40px] rounded-full bg-primary-blue flex items-center justify-center text-base font-bold text-white">
                    {stepNumber}
                </span>
                <div className="w-[34.5rem] ml-5">
                    <p className="text-base font-bold text-tricorn-black">
                        {discription}
                    </p>
                    {
                        stepImg && (
                            <figure className="mt-6">
                                <Image
                                    src={stepImg}
                                    width={552}
                                    height={354}
                                    alt={imgAlt}
                                    layout="responsive"
                                    className="border border-borderPrimary rounded-xl"
                                />
                                {
                                    caption && (
                                        <figcaption className="font-medium text-gray-light mt-4">
                                            {caption}
                                        </figcaption>
                                    )
                                }
                            </figure>
                        )
                    }
                </div>
            </li>
        </>
    )
}

export default ProcessStep
