import React from 'react';

const SearchProposals = ({ width, bgColor, placeholder, className, ...inputProps }) => {
    return (
        <div className={`${className} flex items-center p-2 bg-${bgColor} rounded-full  max-w-md mx-auto`} style={{ minWidth: width }}>
            <div className='mx-3'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 25L19.2094 19.2094M19.2094 19.2094C20.1999 18.2189 20.9856 17.043 21.5217 15.7488C22.0577 14.4547 22.3336 13.0676 22.3336 11.6668C22.3336 10.266 22.0577 8.87896 21.5217 7.5848C20.9856 6.29065 20.1999 5.11475 19.2094 4.12424C18.2189 3.13373 17.043 2.34802 15.7488 1.81196C14.4547 1.27591 13.0676 1 11.6668 1C10.266 1 8.87896 1.27591 7.5848 1.81196C6.29065 2.34802 5.11474 3.13373 4.12424 4.12424C2.12382 6.12466 1 8.8378 1 11.6668C1 14.4958 2.12382 17.209 4.12424 19.2094C6.12466 21.2098 8.8378 22.3336 11.6668 22.3336C14.4958 22.3336 17.209 21.2098 19.2094 19.2094Z" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <input type="text" placeholder={placeholder} className="pl-4 pr-10 py-2 w-full bg-transparent focus:outline-none placeholder-zinc-400 text-zinc-700 placeholder-custom" {...inputProps} />
        </div>
    );
}

export default SearchProposals;
