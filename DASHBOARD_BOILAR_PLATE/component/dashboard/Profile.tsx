"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Briefcase, Calendar, Edit2, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import logo from '@/assets/images/palak.jpg'
import Image, { StaticImageData } from 'next/image'

interface AdminProfile {
    name: string
    email: string
    phone: string
    address: string
    bio: string
    avatar: string | StaticImageData
    position: string
    joinDate: string
}

export default function Profile() {
    const [profile, setProfile] = useState<AdminProfile>({
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        phone: "+1 (555) 123-4567",
        address: "789 Oak Avenue, Springfield, ST 12345",
        bio: "Dedicated and innovative IT professional with over a decade of experience in system administration and network security. Passionate about implementing cutting-edge technologies to streamline operations and enhance user experience.",
        avatar: logo,
        position: "Senior Systems Administrator",
        joinDate: "January 15, 2018",
    })

    const [isEditing, setIsEditing] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProfile((prev) => ({ ...prev, [name]: value }))
    }

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfile((prev) => ({ ...prev, avatar: reader.result as string }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the updated profile to your backend
        console.log("Updated profile:", profile)
        setIsEditing(false)
    }

    return (
        <div className="container mx-auto p-6 bg-bg_secondary min-h-[80vh]">
            <div className="max-w-6xl mx-auto  rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex rounded-[10px] overflow-hidden">
                    {/* Left column - Avatar and basic info */}
                    <div className="md:w-1/3 bg-bg_primary  p-8 text-white">
                        <div className="text-center">
                            <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-white">
                                <Image src={profile.avatar} alt={profile.name} width={192} height={192} />
                                <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
                            <p className="text-gray-300 mb-4">{profile.position}</p>
                            {isEditing ? (
                                <div>
                                    <Label
                                        htmlFor="avatar"
                                        className="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300"
                                    >
                                        <Edit2 className="w-4 h-4 mr-2" />
                                        Change Avatar
                                    </Label>
                                    <Input id="avatar" type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" />
                                </div>
                            ) : null}
                        </div>
                        <Separator className="my-6 bg-gray-600" />
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Briefcase className="w-5 h-5 mr-3" />
                                <span>{profile.position}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-3" />
                                <span>Joined {profile.joinDate}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Editable fields */}
                    <div className="md:w-2/3 p-8 text-black bg-[#e6e6e6]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-semibold">Profile Information</h3>
                            {!isEditing ? (
                                <Button onClick={() => setIsEditing(true)} variant="outline" className="flex items-center ">
                                    <Edit2 className="w-4 h-4 mr-2" />
                                    Edit Profile
                                </Button>
                            ) : (
                                <div className="space-x-2">
                                    <Button onClick={handleSubmit} variant="default" className="">
                                        <Check className="w-4 h-4 mr-2" />
                                        Save
                                    </Button>
                                    <Button onClick={() => setIsEditing(false)} variant="outline" className="">
                                        <X className="w-4 h-4 mr-2" />
                                        Cancel
                                    </Button>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium text-gray-800">
                                        Full Name
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="name"
                                            name="name"
                                            value={profile.name}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-800">
                                        Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={profile.email}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium text-gray-800">
                                        Phone
                                    </Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={profile.phone}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address" className="text-sm font-medium text-gray-800">
                                        Address
                                    </Label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="address"
                                            name="address"
                                            value={profile.address}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio" className="text-sm font-medium text-gray-800">
                                    Bio
                                </Label>
                                <Textarea
                                    id="bio"
                                    name="bio"
                                    value={profile.bio}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    rows={4}
                                    className="w-full"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

