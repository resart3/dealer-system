"use client"

import { DocumentProps } from "@/types"
import Image from "next/image"
import CustomButton from "./AdnButton"
import { useState } from "react"
import { EyeIcon, ArrowUpTrayIcon, ArrowDownCircleIcon } from "@heroicons/react/20/solid"
import ReactPanZoom from 'react-image-pan-zoom-rotate'
import AdnModal from "./AdnModal"

interface DocumentCardProps {
  document: DocumentProps
}

const DocumentCard = ({ document }: DocumentCardProps) => {

  const [openModalUpload, setOpenModalUpload] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalView, setOpenModalView] = useState(false)
  
  const { id ,doc_code, doc_name, insert_by, insert_date, update_by, update_date, doc_code_dms } = document

  // const carRent = calculateCarRent(city_mpg, year)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="document-card group">
      <div className="document-card__content">
        <h2 className="document-card__content-title">
          {doc_name} {doc_code_dms}
        </h2>
      </div>

      {/* <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
          {doc_code}
        <span className="self-end text-[14px] font-semibold">
          /day
        </span>
      </p> */}


      {/* <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(document)} alt="car model" fill priority className="object-contain" />
      </div> */}

      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-end text-gray gap-6">
          <div className="document-card__right-button flex flex-col justify-center items-center gap-2" onClick={() => setOpenModalView(true)}>
            <EyeIcon className="h-5 w-5" aria-hidden="true" />

            <p className="text-[14px]">
              {/* {transmission === 'a' ? 'Automatic' : 'Manual'} */}
            </p>
          </div>
          <div className="document-card__right-button flex flex-col justify-center items-center gap-2" onClick={() => setOpenModalUpload(true)}>
            <ArrowUpTrayIcon className="h-5 w-5" aria-hidden="true" />
            <p className="text-[14px]">
              {/* {drive.toUpperCase()} */}
            </p>
          </div>
          <div className="document-card__right-button flex flex-col justify-center items-center gap-2">
            <ArrowDownCircleIcon className="h-5 w-5" aria-hidden="true" />
            <p className="text-[14px]">
              {/* {city_mpg} MPG */}
            </p>
          </div>
        </div>

        {/* <div className="document-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyle="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div> */}
      </div>

      {/* <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} /> */}

      <AdnModal open={openModalView} onClose={() => setOpenModalView(false)} title="View">
          
            <ReactPanZoom
            image="https://images.unsplash.com/photo-1551091708-fda32ed3178c"
            alt="Image alt text"
            />


      </AdnModal>
      <AdnModal open={openModalUpload} onClose={() => setOpenModalUpload(false)} title="Upload">

      {/* <form className="max-w-lg mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900">Upload file</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
      </form> */}
            <div className="mb-8">
          <input type="file" name="file" id="file" className="sr-only" />
          <label
            htmlFor="file"
            className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center hover:cursor-pointer hover:bg-gray-50"
          >
            <div>
              <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop file here
              </span>
              <span className="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Browse
              </span>
            </div>
          </label>
        </div>

        <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
          <div className="flex items-center justify-between">
            <span className="truncate pr-3 text-base font-medium text-[#07074D]">
              buku-nikah.jpg
            </span>
            <button className="text-[#07074D]">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
            <div
              className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"
            ></div>
          </div>
        </div>


      </AdnModal>
      <AdnModal open={openModalDelete} onClose={() => setOpenModalDelete(false)} title="Delete">

        <div className='text-center w-full max-w-xl'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt in aperiam quae nostrum esse, deleniti eligendi dolorem fugit illo! Reprehenderit facere molestiae sint atque adipisci ex delectus! Recusandae, quis!</p>
            <div className='mx-auto my-4 w-48'>
                <h3 className='text-lg font-black text-gray-800'></h3>
                <p className='text-sm text-gray-500'>Are you sure</p>
            </div>
            <div className='flex gap-4'>
                <button></button>
            </div>
        </div>
      </AdnModal>
    </div>
  )
}

export default DocumentCard