import { MouseEventHandler } from "react"

export interface AdnButtonProps {
  title: string
  containerStyles?: string
  btnType?: "button" | "submit"
  textStyle?: string
  rightIcon?: string
  isDisabled?: boolean
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface AdnModalProps {
  open: boolean
  onClose: () => void
  title: string
  containerStyles?: string
  children: any
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface DocumentProps {
  id: number,
  doc_code: string,
  doc_name: string,
  insert_by: string,
  insert_date: string,
  update_by: string,
  update_date: string,
  doc_code_dms: string
}

export interface FilterProps {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

export interface OptionProps {
  title: string
  value: string
}
export interface CustomFilterProps {
  title: string
  options: OptionProps[]
}
export interface dataTable{
  id: number; 
  title: string; 
  year: string; 
  runtime: string; 
  genres: string[]; director: string; actors: string; plot: string; posterUrl: string;
}