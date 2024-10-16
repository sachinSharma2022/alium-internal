import React from "react";
import Image from "next/image";

const FormLeft = ({ title, heading, description, image }) => {
  return (
    <div className="bg-primary-blue p-12 xl:max-w-[515px] lg:max-w-[515px] rounded-2xl w-full lg:w-1/2 flex flex-col justify-between h-[calc(100vh-40px)]">
      <div>
        <small className="text-white font-extrabold text-xl lg:pb-10 xl:pb-20 block">
          {title}
        </small>
        <h1 className="text-white mb-6 max-w-[366px]">{heading}</h1>
        <p className="text-white text-xl">{description}</p>
      </div>
      <div className="xl:w-[405px] xl:mx-auto md:w-[350px] lg:w-[350px] lg:pt-8 xxl:pt-0">
        <figure className="pt- 16">
          <Image src={image} alt="login image" width={405} height={293} />
        </figure>
      </div>
    </div>
  );
};

export default FormLeft;
