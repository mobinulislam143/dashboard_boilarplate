"use client"

import { useState } from "react"
import { Pencil, Trash2 } from "lucide-react"
import Swal from "sweetalert2"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Offer {
    id: number
    senderName: string
    receiverName: string
    offerType: string
    price: number
}

export default function OffersTable() {
    const [offers, setOffers] = useState<Offer[]>([
        { id: 1, senderName: "John Doe", receiverName: "Jane Smith", offerType: "Job Offer", price: 500 },
        { id: 2, senderName: "Alice Johnson", receiverName: "Bob Williams", offerType: "Partnership", price: 500 },
        { id: 3, senderName: "Eva Brown", receiverName: "Michael Davis", offerType: "Project Collaboration", price: 500 },
    ])

    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [editingOffer, setEditingOffer] = useState<Offer | null>(null)

    const handleEdit = (offer: Offer) => {
        setEditingOffer(offer)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                setOffers(offers.filter((offer) => offer.id !== id))
                Swal.fire("Deleted!", "The offer has been deleted.", "success")
            }
        })
    }

    const handleSaveEdit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (editingOffer) {
            setOffers(offers.map((offer) => (offer.id === editingOffer.id ? editingOffer : offer)))
            setIsEditDialogOpen(false)
            console.log("my updated offer is", editingOffer);
            setEditingOffer(null)
        }
    }

    return (
        <div className="bg-bg_secondary min-h-[80vh] rounded-[12px] p-4 px-10">
            <Table>
                <TableHeader>
                    <TableRow className="">
                        <TableHead className="w-[100px]">Serial</TableHead>
                        <TableHead>Sender Name</TableHead>
                        <TableHead>Receiver Name</TableHead>
                        <TableHead>Offer Type</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {offers.map((offer, index) => (
                        <TableRow key={offer.id} className="text-black">
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{offer.senderName}</TableCell>
                            <TableCell>{offer.receiverName}</TableCell>
                            <TableCell>{offer.offerType}</TableCell>
                            <TableCell>{offer.price}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" className="hover:bg-green-200 text-green-800 rounded-[8px]" size="sm" onClick={() => handleEdit(offer)}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" className="hover:bg-red-200 text-red-800 rounded-[8px]" size="sm" onClick={() => handleDelete(offer.id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                        <DialogTitle>Edit Offer</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSaveEdit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="senderName" className="text-right">
                                    Sender Name
                                </Label>
                                <Input
                                    id="senderName"
                                    value={editingOffer?.senderName}
                                    onChange={(e) => setEditingOffer((prev) => ({ ...prev!, senderName: e.target.value }))}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="receiverName" className="text-right">
                                    Receiver Name
                                </Label>
                                <Input
                                    id="receiverName"
                                    value={editingOffer?.receiverName}
                                    onChange={(e) => setEditingOffer((prev) => ({ ...prev!, receiverName: e.target.value }))}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="offerType" className="text-right">
                                    Offer Type
                                </Label>
                                <Input
                                    id="offerType"
                                    value={editingOffer?.offerType}
                                    onChange={(e) => setEditingOffer((prev) => ({ ...prev!, offerType: e.target.value }))}
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button className="bg-bg_primary rounded-[10px] hover:bg-[#4125a5]" type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

