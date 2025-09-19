
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
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { Pencil, User, Users } from "lucide-react"
import React from 'react'
import { Button } from "./ui/button"
import { DialogHeader } from "./ui/dialog"
import UserForm from "./forms/user-form"
import DeleteUserButton from "./delete-user-button"

export default async function TableUlangan() {
    const user = await getUsers()
    const dataQuran = await fetchdataquran()
    const pencariNamaSurat = (nomorSurat:number) => {
        if (nomorSurat === 0){
            return "datanye kosong kunyukk"
        }
        const namaSurat = dataQuran.find((nomerSuratDariAPI) => nomerSuratDariAPI.nomor === nomorSurat)
        return namaSurat ? namaSurat.namaLatin : 0
    }
  return (
   <Table>
  <TableCaption>Hafalan Tahfidz santri.</TableCaption>
  <TableHeader>
   
    <TableRow>
      <TableHead className="w-[100px]">Username</TableHead>
      <TableHead>Password</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Nama Surat</TableHead>
      <TableHead>Jumlah Ayat</TableHead>
      <TableHead>Created At</TableHead>
      <TableHead>Updated At</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
     {user.map((user)=>(
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{pencariNamaSurat(user.surat ?? 0)}</TableCell>
            <TableCell>{user.ayat ?? "kamana ieu?"}</TableCell>
            <TableCell>{user.createdAt?.toLocaleString()}</TableCell>
            <TableCell>{user.updatedAt?.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost">
                    <Pencil className="size-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Perubahan Data Santri</DialogTitle>
                    <UserForm  user={user}/>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <DeleteUserButton userId={user.id} />
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
