"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import {  DarkThemeToggle } from "flowbite-react";
import instance from "@/app/services/Axios/AxiosOrder";
import {useState} from "react";


export default function Home() {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [secName, setSecName] = useState('')
    const [password, setPassword] = useState('')


    const registerHandle = () =>{
        if(firstName !== '' && secName !== '' && password !== '' && email !== ''){
            instance.post('/admin/register', {
                firstName: firstName,
                secName: secName,
                email: email,
                password:password,
            })
                .then(function (response) {
                    console.log(firstName);
                    console.log(secName);
                    console.log(email);
                    console.log(password);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }else {
            alert("Please input all info")
        }

        setEmail("");
        setPassword("");
        setFirstName("");
        setSecName("");
    }


    return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-5 dark:bg-gray-800 ">
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Register</h1>
            <br/>
        </div>
        <div className="flex flex-col ">
            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="small" value="First Name" />
                    </div>
                    <TextInput
                        onChange={(e) => setFirstName(e.target.value)}
                        id="small" type="text" sizing="sm" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="small" value="Last Name" />
                    </div>
                    <TextInput
                        onChange={(e) => setSecName(e.target.value)}
                        id="small" type="text" sizing="sm" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput
                        onChange={(e) => setEmail(e.target.value)}
                        id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput
                        onChange={(e) => setPassword(e.target.value)}
                        id="password2" type="password" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput id="repeat-password" type="password" required shadow />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </Link>
                    </Label>
                </div>
                <Button
                    onclick={() => registerHandle()}
                    type="submit">Register new account</Button>
            </form>
        </div>

      <DarkThemeToggle />

    </main>
  );
}
