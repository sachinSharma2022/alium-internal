import React from "react";

const Icon = ({ name, ...props }) => {
    const SelectedIcon = icons[name];

    if (!SelectedIcon) {
        return null;
    }

    return <SelectedIcon {...props} />;
};

const icons = {

    arrowDown: (props) => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1869_47070)">
                <path d="M15.4167 7.5L10.4167 12.5L5.41675 7.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1869_47070">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),

    setting: (props) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2049_2076)">
                <path
                    d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_2049_2076">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    sorting: (props) => (
        <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_814_34809)">
                <path
                    d="M9 7.5L6 4.5L3 7.5H9Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <g clip-path="url(#clip1_814_34809)">
                <path
                    d="M3 12.5L6 15.5L9 12.5H3Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_814_34809">
                    <rect width="12" height="12" fill="white" />
                </clipPath>
                <clipPath id="clip1_814_34809">
                    <rect width="12" height="12" fill="white" transform="translate(0 8)" />
                </clipPath>
            </defs>
        </svg>
    ),

    calendarTimes: (props) => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1036_39268)">
                <path d="M9.82917 17.4993H4.16667C3.72464 17.4993 3.30072 17.3238 2.98816 17.0112C2.67559 16.6986 2.5 16.2747 2.5 15.8327V5.83268C2.5 5.39065 2.67559 4.96673 2.98816 4.65417C3.30072 4.34161 3.72464 4.16602 4.16667 4.16602H14.1667C14.6087 4.16602 15.0326 4.34161 15.3452 4.65417C15.6577 4.96673 15.8333 5.39065 15.8333 5.83268V9.16602"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M15 18.3327C16.8409 18.3327 18.3333 16.8403 18.3333 14.9993C18.3333 13.1584 16.8409 11.666 15 11.666C13.159 11.666 11.6666 13.1584 11.6666 14.9993C11.6666 16.8403 13.159 18.3327 15 18.3327Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M12.5 2.5V5.83333"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M5.83337 2.5V5.83333"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M2.5 9.16602H15.8333"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M15 13.7461V14.9994L15.8333 15.8328"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1036_39268">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),

    arrowLeft: (props) => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_199_4436)">
                <path d="M4.16663 10H15.8333"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M4.16663 10L9.16663 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M4.16663 10L9.16663 5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_199_4436">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    arrowUpDown: (props) => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4142_9361)">
                <path d="M6.66675 6.66732L10.0001 3.33398L13.3334 6.66732"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M6.66675 13.334L10.0001 16.6673L13.3334 13.334"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_4142_9361">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    close: (props) => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1125_44644)">
                <path d="M15 5L5 15"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M5 5L15 15"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1125_44644">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),

    pie: (props) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1152_66228)">
                <path d="M11.25 2.25067C11.25 2.44958 11.329 2.64035 11.4697 2.781C11.6103 2.92165 11.8011 3.00067 12 3.00067C13.3691 2.99588 14.7209 3.30586 15.9511 3.90666C17.1814 4.50746 18.257 5.38301 19.095 6.46567C19.1911 6.58954 19.3237 6.68018 19.474 6.72482C19.6243 6.76946 19.7848 6.76587 19.933 6.71455C20.0812 6.66323 20.2095 6.56676 20.3 6.43871C20.3905 6.31066 20.4386 6.15746 20.4375 6.00067C20.4387 5.83239 20.3832 5.66861 20.28 5.53567C19.2996 4.27551 18.0436 3.25664 16.6083 2.55721C15.173 1.85777 13.5966 1.49635 12 1.50067C11.8011 1.50067 11.6103 1.57968 11.4697 1.72034C11.329 1.86099 11.25 2.05175 11.25 2.25067Z"
                    fill="currentColor" />
                <path d="M20.565 9.23237C21.0014 10.5828 21.1123 12.0172 20.8885 13.4187C20.6648 14.8201 20.1128 16.1488 19.2777 17.2962C18.4425 18.4436 17.3479 19.3772 16.0831 20.0209C14.8183 20.6646 13.4192 21 12 20.9999C9.87194 21.0028 7.81297 20.2447 6.195 18.8624L12.5325 12.5324C12.6737 12.3911 12.7531 12.1996 12.7531 11.9999C12.7531 11.8001 12.6737 11.6086 12.5325 11.4674C12.3913 11.3261 12.1997 11.2468 12 11.2468C11.8003 11.2468 11.6087 11.3261 11.4675 11.4674L5.1375 17.8049C3.75517 16.1869 2.99703 14.1279 3 11.9999C3 11.801 2.92098 11.6102 2.78033 11.4695C2.63968 11.3289 2.44891 11.2499 2.25 11.2499C2.05109 11.2499 1.86032 11.3289 1.71967 11.4695C1.57902 11.6102 1.5 11.801 1.5 11.9999C1.49998 13.5171 1.82879 15.0164 2.46379 16.3944C3.09878 17.7724 4.02488 18.9964 5.17831 19.9821C6.33175 20.9679 7.68511 21.6919 9.14523 22.1045C10.6053 22.517 12.1375 22.6082 13.6362 22.3717C15.135 22.1353 16.5647 21.5768 17.8269 20.7349C19.0891 19.8929 20.1538 18.7873 20.9477 17.4944C21.7417 16.2014 22.246 14.7517 22.4259 13.2452C22.6058 11.7386 22.4571 10.2109 21.99 8.76737C21.9229 8.58527 21.7879 8.43625 21.6133 8.35162C21.4387 8.267 21.238 8.25335 21.0535 8.31355C20.8691 8.37375 20.7151 8.5031 20.624 8.67444C20.5329 8.84578 20.5117 9.04576 20.565 9.23237V9.23237Z"
                    fill="currentColor" />
                <path d="M12.75 0.75L12.75 12C12.75 12.1989 12.671 12.3897 12.5303 12.5303C12.3897 12.671 12.1989 12.75 12 12.75L0.75 12.75C0.551088 12.75 0.360322 12.671 0.21967 12.5303C0.0790176 12.3897 -2.40888e-08 12.1989 -3.27835e-08 12C-1.71899e-07 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 6.27858e-07 12 4.88742e-07C12.1989 4.80048e-07 12.3897 0.0790175 12.5303 0.21967C12.671 0.360322 12.75 0.551088 12.75 0.75ZM11.25 11.25L11.25 1.5C8.72185 1.67497 6.34227 2.75837 4.55032 4.55032C2.75837 6.34227 1.67497 8.72185 1.5 11.25L11.25 11.25Z"
                    fill="currentColor" />
                <path d="M21 19.5L21 23.25C21 23.4489 20.921 23.6397 20.7804 23.7803C20.6397 23.921 20.449 24 20.25 24C20.0511 24 19.8604 23.921 19.7197 23.7803C19.5791 23.6397 19.5 23.4489 19.5 23.25L19.5 19.7775L15.18 14.7375C15.0507 14.5863 14.9868 14.39 15.0023 14.1917C15.0177 13.9933 15.1114 13.8093 15.2625 13.68C15.4137 13.5507 15.6101 13.4868 15.8084 13.5022C16.0067 13.5177 16.1907 13.6113 16.32 13.7625C21.18 19.4325 21 19.1025 21 19.5Z" fill="currentColor" />
                <path d="M24 19.5L24 23.25C24 23.4489 23.921 23.6397 23.7803 23.7803C23.6397 23.921 23.4489 24 23.25 24C23.0511 24 22.8603 23.921 22.7197 23.7803C22.579 23.6397 22.5 23.4489 22.5 23.25L22.5 19.5C22.5 19.3011 22.579 19.1103 22.7197 18.9697C22.8603 18.829 23.0511 18.75 23.25 18.75C23.4489 18.75 23.6397 18.829 23.7803 18.9697C23.921 19.1103 24 19.3011 24 19.5Z"
                    fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_1152_66228">
                    <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)" />
                </clipPath>
            </defs>
        </svg>

    ),

    plus: (props) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_2332_41968)">
                <path
                    d="M12 5V19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M5 12H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_2332_41968">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),

    delete: (props) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1945_1237)">
                <path d="M3.33325 5.83331H16.6666"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M8.33325 9.16669V14.1667"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M11.6667 9.16669V14.1667"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M4.16675 5.83331L5.00008 15.8333C5.00008 16.2753 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2753 15.0001 15.8333L15.8334 5.83331"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1945_1237">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    export: (props) => (
        <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3566_14233)">
                <path d="M10.0834 16.6673H5.50004C5.05801 16.6673 4.63409 16.4917 4.32153 16.1792C4.00897 15.8666 3.83337 15.4427 3.83337 15.0007V5.00065C3.83337 4.55862 4.00897 4.1347 4.32153 3.82214C4.63409 3.50958 5.05801 3.33398 5.50004 3.33398H15.5C15.9421 3.33398 16.366 3.50958 16.6786 3.82214C16.9911 4.1347 17.1667 4.55862 17.1667 5.00065V11.2507M3.83337 8.33398H17.1667M8.83337 3.33398V16.6673M12.1667 15.834H18M18 15.834L15.5 13.334M18 15.834L15.5 18.334"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_3566_14233">
                    <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>

    ),
};



export default Icon;
