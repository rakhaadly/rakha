"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" 
import React, { useState } from 'react'
import { Button } from "../ui/button"
import { Loader2, Trash2 } from "lucide-react"
import { useRouter } from "next/router"
import { deleteUser } from "@/server/users"
import { toast } from "sonner"

export default function TombolHapusData(userId:string) {
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const hapusData = async () => {
        try {
           setIsLoading(true) 
           await deleteUser(userId)
           toast.success("data berhasil di hapus")
           setIsOpen(false)
        } catch (error) {
            console.error(error)
            toast.error("data gagal di hapus")
        } finally {
            setIsLoading(false)
        }
    }
  return (
   <Dialog open={isOpen} onOpenChange={setIsOpen} >
  <DialogTrigger asChild>
    <Button variant="ghost">
      <Trash2 className="size-4"/>
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>

      <DialogTitle>Yakin mo di apus nih?</DialogTitle>
      <DialogDescription>
        Tindakan ini tidak dapat dibatalkan. Ini akan menghapus akun Anda secara permanen
        dan menghapus data Anda dari server kami.
      </DialogDescription>
      <Button variant="destructive" disabled={isLoading} onClick={hapusData} >
        {isLoading ?<Loader2 className="size-4 animate-spin mr-2"/> : null}
        hapus
      </Button>
    </DialogHeader>
  </DialogContent>
</Dialog>      
  )
}
