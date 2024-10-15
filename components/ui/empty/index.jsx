import React from 'react'
import Image from 'next/image'
import { Button } from '../button'


const Empty = ({ img, title, description, buttonText, icon }) => {
    return (
        <>
            <figure>
                <Image
                    src={img}
                    width={320}
                    height={320}
                    alt="not found image"
                />
            </figure>
            <div className="text-center w-[31.5rem]">
                <h5 className="text-black-primary">{title}</h5>
                <p className="font-normal pt-3">{description}</p>
                <div className="w-fit mx-auto mt-6">
                    <Button variant="blueBtn" size="sm">
                        <Image
                            src={icon}
                            width={20}
                            height={20}
                            alt="not found" />
                        {buttonText}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Empty