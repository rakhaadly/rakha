import UserForm from '@/components/forms/user-form'
import TableUlangan from '@/components/table-ulangan'
import { Button } from '@/components/ui/button'
import { DialogHeader } from '@/components/ui/dialog'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { UserPlus } from 'lucide-react'
import React from 'react'

export default async function page(){
    return(
        <div className="flex flex-col gap-4 p-4 md:p-24">
            <h1 className="text-2xl font-bold">Data Hafalan al-Quran Santri</h1>
            <div>
                <Dialog modal={false}>
                    <DialogTrigger asChild>
                        <Button>
                            Tambah Data Santri <UserPlus className="size-4" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Tambah Data Santri</DialogTitle>
                        <div>
                            <div>
                                <DialogDescription>
                                    data santri
                                </DialogDescription>
                            </div>
                            <div>
                                <UserForm />
                               
                            </div>   
                        </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
            <TableUlangan />
        </div>
    )
}
