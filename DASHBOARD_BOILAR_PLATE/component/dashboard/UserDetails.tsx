"use client"

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { Star, Briefcase, Clock, DollarSign, Linkedin, FileText, Phone, Calendar, Globe } from "lucide-react"
import { MdOutlineEmail } from "react-icons/md"

import avatar from "@/assets/images/avatar.jpg"

type UserData = {
    name: { firstName?: string; lastName?: string }
    dateOfBirth: Date
    phoneNumber: string
    email: string
    linkedinProfile?: string
    profileUrl?: string | StaticImageData
    bio: string
    expertise: string
    industry: string
    averageRating: number
    reviewCount: number
    technicalSkills?: string[]
    previousPositions?: string[]
    availability?: number
    hourlyRate?: string
    cvOrCoverLetter?: string
    companyName?: string
    jobTitle?: string
    companyWebsite?: string
    budgetRange?: { min: number; max: number }
    projectDurationRange?: number
    projectPreferences?: string[]
}

const userData: UserData = {
    name: { firstName: "John", lastName: "Doe" },
    dateOfBirth: new Date("1985-05-15"),
    phoneNumber: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    linkedinProfile: "https://linkedin.com/in/johndoe",
    profileUrl: avatar,
    bio: "Experienced professional with a passion for innovation and problem-solving.",
    expertise: "Full Stack Development",
    industry: "Technology",
    averageRating: 4.8,
    reviewCount: 25,
    technicalSkills: ["JavaScript", "React", "Node.js", "Python", "AWS"],
    previousPositions: ["Senior Developer at Tech Co", "Lead Engineer at Innovate Inc"],
    availability: 40,
    hourlyRate: "$100",
    cvOrCoverLetter: "https://example.com/john-doe-cv.pdf",
    companyName: "InnovateTech",
    jobTitle: "Senior Software Engineer",
    companyWebsite: "https://innovatetech.com",
    budgetRange: { min: 50000, max: 100000 },
    projectDurationRange: 6,
    projectPreferences: ["Web Development", "AI Integration", "Cloud Architecture"],
}

export default function UserDetails() {
    const [user, setUser] = useState<UserData>(userData)


    return (
        <div className="bg-bg_secondary min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <Image
                            className="h-48 w-full object-cover md:w-48"
                            src={user.profileUrl || "/placeholder.svg?height=192&width=192"}
                            alt={`${user.name?.firstName} ${user.name?.lastName}`}
                            width={192}
                            height={192}
                        />
                    </div>
                    <div className="p-8">
                        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {user.name?.firstName} {user.name?.lastName}
                        </h1>
                        <p className="mt-2 text-xl text-gray-500">{user.expertise}</p>
                        <div className="mt-4 flex items-center">
                            <Star className="h-5 w-5 text-yellow-400" />
                            <span className="ml-2 text-sm text-gray-600">
                                {user.averageRating.toFixed(1)} ({user.reviewCount} reviews)
                            </span>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                            <p className="text-gray-700">{user.bio}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Details</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-600">
                                    <MdOutlineEmail className="h-5 w-5 mr-2" />
                                    {user.email}
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <Briefcase className="h-5 w-5 mr-2" />
                                    {user.industry}
                                </li>
                                {user.availability && (
                                    <li className="flex items-center text-gray-600">
                                        <Clock className="h-5 w-5 mr-2" />
                                        Availability: {user.availability} hours/week
                                    </li>
                                )}
                                {user.hourlyRate && (
                                    <li className="flex items-center text-gray-600">
                                        <DollarSign className="h-5 w-5 mr-2" />
                                        Hourly Rate: {user.hourlyRate}
                                    </li>
                                )}
                                {user.budgetRange && (
                                    <li className="flex items-center text-gray-600">
                                        <DollarSign className="h-5 w-5 mr-2" />
                                        Budget: ${user.budgetRange.min} - ${user.budgetRange.max}
                                    </li>
                                )}
                                {user.projectDurationRange && (
                                    <li className="flex items-center text-gray-600">
                                        <Clock className="h-5 w-5 mr-2" />
                                        Project Duration: {user.projectDurationRange} months
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-6 bg-gray-50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {user.technicalSkills && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {user.technicalSkills.map((skill, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {user.previousPositions && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Previous Positions</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    {user.previousPositions.map((position, index) => (
                                        <li key={index}>{position}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    {user.projectPreferences && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Project Preferences</h3>
                            <div className="flex flex-wrap gap-2">
                                {user.projectPreferences.map((preference, index) => (
                                    <span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                        {preference}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="px-8 py-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-600">
                            <Phone className="h-5 w-5 mr-2" />
                            {user.phoneNumber}
                        </li>
                        {user.linkedinProfile && (
                            <li className="flex items-center text-gray-600">
                                <Linkedin className="h-5 w-5 mr-2" />
                                <a
                                    href={user.linkedinProfile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    LinkedIn Profile
                                </a>
                            </li>
                        )}
                        {user.cvOrCoverLetter && (
                            <li className="flex items-center text-gray-600">
                                <FileText className="h-5 w-5 mr-2" />
                                <a
                                    href={user.cvOrCoverLetter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    CV/Cover Letter
                                </a>
                            </li>
                        )}
                        {user.companyWebsite && (
                            <li className="flex items-center text-gray-600">
                                <Globe className="h-5 w-5 mr-2" />
                                <a
                                    href={user.companyWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Company Website
                                </a>
                            </li>
                        )}
                        <li className="flex items-center text-gray-600">
                            <Calendar className="h-5 w-5 mr-2" />
                            Born: {new Date(user.dateOfBirth).toLocaleDateString()}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

