//pr = mentranslate nomor value data di kolom nama suratr menjadi namaLatin sesuai json API

export async function fetchdataquran():
Promise<{
        nomor:number
        namaLatin:string
        jumlahAyat:number
}[]>
{
    const res = await fetch("https://equran.id/api/v2/surat")
    const json = await res.json()
    return json.data 
}

// ini adalah API u/ mengambil data quran