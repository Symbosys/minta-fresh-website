"use server";

import { cookies } from "next/headers";
import { updateTag } from "next/cache"; 
import { axiosClient } from "../api/apiClient";
import { AxiosError } from "axios";

async function getAuthHeaders() {
  const cookieStore = await cookies();
  const token = cookieStore.get("vendorToken")?.value;
  
  if (!token) return {};
  
  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function sendOtp(mobile: string) {
  try {
    console.log(`Sending OTP to: ${mobile} using baseURL: ${axiosClient.defaults.baseURL}`);
    const { data } = await axiosClient.post("/auth/vendor/request-otp", { mobile });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
        // Return structured error
        console.error("Axios Error Details:", error.response?.data || error.message);
        return error.response?.data || { success: false, message: "Failed to send OTP" };
    }
    console.error("Send OTP Error (Unknown):", error);
    return { success: false, message: "Failed to send OTP" };
  }
}

export async function verifyOtp(mobile: string, otp: string) {
  try {
    const { data } = await axiosClient.post("/auth/vendor/verify-otp", { mobile, otp });
    
    if (data.success && data.data?.token) {
      const cookieStore = await cookies();
      // Set token cookie
      cookieStore.set("vendorToken", data.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
      // Set vendor ID cookie
      cookieStore.set("vendorId", data.data.vendor.id.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
    }
    
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
        return error.response?.data || { success: false, message: "Failed to verify OTP" };
    }
    console.error("Verify OTP Error:", error);
    return { success: false, message: "Failed to verify OTP" };
  }
}

export async function getVendorProfile() {
  try {
    const cookieStore = await cookies();
    const vendorId = cookieStore.get("vendorId")?.value;
    const token = cookieStore.get("vendorToken")?.value;
    
    if (!vendorId || !token) {
      return { success: false, message: "Not authenticated" };
    }
    
    const { data } = await axiosClient.get(`/vendor/me?id=${vendorId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
        return error.response?.data || { success: false, message: "Failed to fetch profile" };
    }
    console.error("Get Profile Error:", error);
    return { success: false, message: "Failed to fetch profile" };
  }
}

export async function updateVendorProfile(formData: FormData) {
  try {
    const cookieStore = await cookies();
    const vendorId = cookieStore.get("vendorId")?.value;
    const token = cookieStore.get("vendorToken")?.value;
    
    if (!vendorId || !token) {
      return { success: false, message: "Not authenticated" };
    }
    
    const { data } = await axiosClient.put(`/vendor/${vendorId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            // Let axios/FormData handle Content-Type (multipart/form-data with boundary) by not setting it explicitly to json
            "Content-Type": undefined // or null, to override default
        }
    });
    
    if (data.success) {
      // Use updateTag as requested
      updateTag("vendor-profile");
    }
    
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
        return error.response?.data || { success: false, message: "Failed to update profile" };
    }
    console.error("Update Profile Error:", error);
    return { success: false, message: "Failed to update profile" };
  }
}

export async function verifyVendorDocument(formData: FormData) {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get("vendorToken")?.value;
      
      if (!token) {
        return { success: false, message: "Not authenticated" };
      }
      
      // Convert FormData to JSON object because headers might be tricky with axios default
      // and the backend endpoint likely accepts JSON for verifyDocument since fields are simple strings
      // But let's check the controller. It uses VerifyVendorDocumentSchema.parse(req.body).
      // Zod parse works on objects. So JSON is preferred.
      
      const payload: any = {};
      formData.forEach((value, key) => {
          payload[key] = value;
      });
  
      const { data } = await axiosClient.post(`/vendor/document/verify`, payload, {
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
          }
      });
      
      if (data.success) {
        updateTag("vendor-profile");
      }
      
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
          return error.response?.data || { success: false, message: "Failed to verify document" };
      }
      console.error("Verify Document Error:", error);
      return { success: false, message: "Failed to verify document" };
    }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("vendorToken");
  cookieStore.delete("vendorId");
  return { success: true };
}
