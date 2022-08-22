import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import { useRouter } from 'next/router'

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          className="dark:text-white text-black"
        >
          Lang
        </InputLabel>
        <NativeSelect
          className="dark:text-white text-black"
          defaultValue={'tr'}
          inputProps={{
            name: 'lang',
            id: 'uncontrolled-native',
          }}
        >
          <option className="text-black" value={'tr'}>
            TR
          </option>
          <option className="text-black" value={'en'}>
            EN
          </option>
        </NativeSelect>
      </FormControl>
    </Box>
  )
}
