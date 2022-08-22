import React from 'react'
import { useField, ErrorMessage } from 'formik'

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="mb-2 sm:w-1/2 w-full flex justify-between">
      <label
        className=" text-gray-200 text-sm font-bold mb-2"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className="appearance-none border rounded  bg-zinc-50 dark:bg-red-800  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...field}
        {...props}
        autoComplete="off"
        type="text"
      />
      <ErrorMessage name={field.name} />
    </div>
  )
}

export default TextField
