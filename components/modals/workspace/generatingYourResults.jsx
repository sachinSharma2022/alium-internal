import React from "react";
import { Button } from "../../ui/button";

const GeneratingYourResults = () => {
  return (
    <>
      <div className="flex flex-col w-full h-[320px] items-center gap-6 relative bg-primary-white rounded-xl shadow-shadow-2">
        <div className="items-center justify-center gap-6 flex-1 flex flex-col relative w-full">
          <div className="items-center gap-3 flex-[0_0_auto] flex flex-col relative w-full">
            <p className="relative w-fit mt-[-1.00px]  font-semibold text-black text-2xl  whitespace-nowrap">
              Hold tight while our AI works its magic.
            </p>
            <p className="relative font-medium text-grey-2 text-base text-center">
              Your request is being processed. This may take a few moments. We
              appreciate your patience!
            </p>
          </div>
          <div className="relative w-12 h-12 bg-[url(/loader.png)] bg-cover bg-[50%_50%]">
            <div className="relative w-8 h-8 top-2 left-2">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-blue border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-normal text-grey-2 text-sm text-center">
              Powered by
            </div>
            <div className="relative w-fit font-extrabold text-primary-blue text-xl text-center   whitespace-nowrap">
              Alium
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="default" size="sm">
          Cancel
        </Button>

        <Button variant="blueBtn" size="sm">
          Edit Prompt
        </Button>
      </div>
    </>
  );
};

export default GeneratingYourResults;
