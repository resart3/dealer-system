"use client"

import { CustomFilterProps } from "@/types"
import { updateSearchParams } from "@/utils"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Fragment, useState } from "react"

export default function AdnFilter({ title, options }: CustomFilterProps) {

  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  const handleUpdateParams = (e: {title: string, value: string}) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())

    router.push(newPathName)
  }

  return (
    <>
    </>
  )
}