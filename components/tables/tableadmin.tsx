import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fetchdataquran } from "@/lib/quran"
import { getUsers } from "@/server/users"

import React from 'react'
import TombolHapusData from "../button/tombol-hapus-data"

export default  async function TableAdmin() {
    const users = await getUsers() //menghubungkan / mengambil data dari api user agar siap pakai
    const dataQuran = await fetchdataquran() //mendapatkan data dari api quran ke table
    const pencariNamaSurat = (nomorSurat:number) => {
        if (nomorSurat === 0){
            return "qodarullah datanya kosong"
        }
        const namaSurat = dataQuran.find((nomerSuratDariAPI) => 
        nomerSuratDariAPI.nomor === nomorSurat)
        return namaSurat ? namaSurat.namaLatin : 0
    }
  return (
<Table>
  <TableCaption>Aplikasi Tahfidz Imam Nafi$apos;</TableCaption>
  <TableHeader>
    <TableRow>
      
      <TableHead>username</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>password</TableHead>
      <TableHead>namaSurat</TableHead>
      <TableHead>jumlahAyat</TableHead>
      <TableHead>createdAt</TableHead>
      <TableHead>updatedAt</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
        <TableRow key={user.id}>
      <TableCell className="font-medium">{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.password}</TableCell>
      <TableCell>{pencariNamaSurat(user.surat ?? 0)}</TableCell>
      <TableCell>{user.ayat}</TableCell>
      <TableCell>{user.createdAt?.toLocaleString()}</TableCell>
      <TableCell>{user.updatedAt?.toLocaleString()}</TableCell>
      <TableCell className="text-right">
        {/* <TombolHapusData /> */}
      </TableCell>
    </TableRow> 
    ))}
   
  </TableBody>
</Table>
  )
}


