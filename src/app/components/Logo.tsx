"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      priority={true}
      alt="logo"
      className="hidden md:block cursor-pointer w-auto h-auto"
      width={100}
      height={100}
      src={"/images/logo.png"}
    />
  );
};

export default Logo;
