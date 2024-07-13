"use client";

import { Input } from "@/components/ui/input";
import { auth } from "@/firebase";
import {
  RecaptchaVerifier,
  ConfirmationResult,
  signInWithPhoneNumber,
} from "firebase/auth";
import React, { FormEvent, useEffect, useState, useTransition } from "react";

const page = () => {
  const [text, setText] = useState<string>("");
  const [reCapt, setReCapt] = useState<RecaptchaVerifier | null>(null);
  const [confirm, setComfirm] = useState<ConfirmationResult | null>(null);
  const [counter, setCounter] = useState<number>(5);
  const [isPending, startTransition] = useTransition();

  const mainForm = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    // setStart(() => {});
    // const confirmation = await signInWithPhoneNumber(auth, text, );
    // setComfirm(confirmation);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (counter > 0) {
      timer = setTimeout(() => {
        setCounter((el) => el - 1);
      }, 1000);
    } else {
      setCounter(5);
    }
  }, [counter]);

  useEffect(() => {
    // let recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
    //   size: "normal",
    // });
  }, [auth]);

  return (
    <div className="p-10">
      <div className="pb-10 mb-3 border-b w-[200px]">
        This is sign in screen
      </div>

      <div className="w-[300px]">
        <form onSubmit={mainForm}>
          <Input
            className="w"
            type="tel"
            placeholder="Enter your Phone Number"
            value={text}
            onChange={(e: FormEvent | any) => {
              setText(e.target.value);
            }}
          />
        </form>
      </div>

      <div className="my-10 text-[20px]">{counter}</div>
    </div>
  );
};

export default page;
