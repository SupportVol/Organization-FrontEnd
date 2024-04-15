import React from "react";
import Link from "next/link";

import CardNA from "@/components/organization/Components/Card/CardNA";

export default function Chat(props: any) {
    return (

        <div>
            <div className="p-4 border-2 border-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 ">
                <h1>Chat</h1>
                <br/>
            </div>
            <br/>
            <div>
                <div className="flex flex-col gap-14">

                    <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>

    );
}
