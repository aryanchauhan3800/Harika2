import React from "react";

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-green-500 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="/harika.jpg" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                       Harika's Green Light
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    
                   
                    
                   
                    
                   
                </div>
               
            </div>
        </div>
    );
}