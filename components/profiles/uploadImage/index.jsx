"use client";
import Image from "next/image";

const UploadImage = ({ profilePhoto, profileTitle, profileDescription }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-6">
      {/* profile Image  */}
      <figure className="relative">
        <Image
          src={profilePhoto}
          width={100}
          height={100}
          alt="profile image"
        />
        {/* upload profile Icon  */}
        <div className="absolute bottom-0 right-0">
          <input type="file" id="file-input" className="hidden" />
          <label for="file-input" className="cursor-pointer">
            <Image
              src="images/camera.svg"
              width={36}
              height={36}
              alt="not found"
            />
          </label>
        </div>
      </figure>

      {/* profile name  */}
      <div className="flex flex-col gap-1">
        <h6 className="font-bold text-black-primary">{profileTitle}</h6>
        <small class="text-base font-normal text-black-primary opacity-60">
          {profileDescription}
        </small>
      </div>
    </div>
  );
};

export default UploadImage;
