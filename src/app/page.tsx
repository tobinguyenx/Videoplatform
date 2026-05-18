import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default page

