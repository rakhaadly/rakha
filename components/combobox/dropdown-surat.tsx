"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { fetchdataquran } from "@/lib/quran"

export default function DropdownSurat({
  suratTerpilih,
  suratYgBerubah,
}: {
  suratTerpilih: string
  suratYgBerubah: (value: string) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(suratTerpilih)
  const [quranData, setQuranData] = React.useState<
    {
      value: string
      label: string
    }[]
  >([])

  // Fetch data Quran (sekali)
  React.useEffect(() => {
    const getData = async () => {
      const data = await fetchdataquran()
      const formattedData = data.map((isijson) => ({
        value: isijson.nomor.toString(),
        label: isijson.namaLatin,
      }))
      setQuranData(formattedData)
    }
    getData()
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? quranData.find((surat) => surat.value === value)?.label
            : "Silahkan pilih surat"}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="ketik nomor surat" />
          <CommandList>
            <CommandEmpty>Surat tidak ditemukan</CommandEmpty>
            <CommandGroup>
              {quranData.map((isiFormattedQuran) => (
                <CommandItem
                  key={isiFormattedQuran.value}
                  value={isiFormattedQuran.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    suratYgBerubah(currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === isiFormattedQuran.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {isiFormattedQuran.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
