'use server';

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

export async function createVendorBankAccount(payload: {
    accountHolder: string;
    bankName: string;
    accountNumber: string;
    ifsc: string;
    branch?: string;
}) {
  try {
    const headers = await getAuthHeaders();
    if (!headers.Authorization) {
        return { success: false, message: "Not authenticated" };
    }

    const { data } = await axiosClient.post("/vendor/bank/create", payload, {
        headers
    });
    
    if (data.success) {
      updateTag("vendor-profile");
    }
    
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
        return error.response?.data || { success: false, message: "Failed to add bank account" };
    }
    console.error("Create Bank Account Error:", error);
    return { success: false, message: "Failed to add bank account" };
  }
}

export async function getVendorBankAccounts() {
    try {
        const headers = await getAuthHeaders();
        if (!headers.Authorization) {
            return { success: false, message: "Not authenticated" };
        }

        const { data } = await axiosClient.get("/vendor/bank/all", {
            headers
        });

        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            return error.response?.data || { success: false, message: "Failed to fetch bank accounts" };
        }
        console.error("Fetch Bank Accounts Error:", error);
        return { success: false, message: "Failed to fetch bank accounts" };
    }
}
