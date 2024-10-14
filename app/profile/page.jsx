"use client"
import { useState } from 'react';
import UserProfile from '@/components/UserProfile';
import PrimaryLayout from '@/components/layout/primaryLayout';

const Profile = () => {
    const [selectedCode, setSelectedCode] = useState("+91");

    const handleSelectChange = (code) => {
        setSelectedCode(code);
    };
    return (
        <PrimaryLayout>
            
            <UserProfile
                    goBack="Go Back"
                    profileTitle="Edit Profile"
                    profileImg="images/user-image.svg"
                    profileName="Upload Picture"
                    admin="Profile picture must be in PNG or JPG format and under 2 MB."
                    buttonText1="Cancel"
                    buttonText2="Edit Profile"
                    disabled={true}
                />
        </PrimaryLayout>
    )
}

export default Profile
