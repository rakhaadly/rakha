"use client"
import  DropdownAyat  from '@/components/combobox/dropdown-ayat'
import DropdownSurat from '@/components/combobox/dropdown-surat'
import React from 'react'

export default function page() {
  const [valueSurat, setValueSurat] = React.useState('1')
  const [valueAyat, setValueAyat] = React.useState('1')
  return (
    <div>
      <DropdownSurat 
        suratTerpilih={valueSurat}
        suratYgBerubah={(suratyangupdate) => setValueSurat(suratyangupdate)}
      />
      <DropdownAyat 
        valueSurat={valueSurat}
        ayatTerpilih={valueAyat}
        ayatYgBerubah={(nomorayat) => setValueAyat(nomorayat.toString())}
      />  
    </div>
  )
}