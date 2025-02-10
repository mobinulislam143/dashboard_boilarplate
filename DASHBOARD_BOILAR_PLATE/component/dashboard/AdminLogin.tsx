'use client'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const { register, handleSubmit, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const formData = data;
            console.log("Form Data as JSON:", formData);

            // Simulate API call for demonstration
            await new Promise((resolve) => setTimeout(resolve, 2000));
            router.push('/dashboard')

        } catch (e) {
            console.error("Error:", e);
        } finally {
            setLoading(false);
            reset();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
            {/* Login Card */}
            <div className="bg-white  p-8 rounded-[10px] shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Admin Login
                </h2>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            // name="email"
                            {...register("email", { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-[8px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e30a6]"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            // name="password"
                            {...register("password", { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-[8px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e30a6]"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-9 text-gray-600 hover:text-gray-800"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Login Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-[8px] shadow-sm text-sm font-medium ${loading ? "bg-gray-400 cursor-not-allowed text-gray-800" : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8h8A8 8 0 014 12z"
                                    />
                                </svg>
                                Logging in...
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
