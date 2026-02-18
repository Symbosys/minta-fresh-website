"use server";

import { cookies } from "next/headers";
import { axiosClient } from "../api/apiClient";
import { AxiosError } from "axios";
import { updateTag } from "next/cache";

async function getAuthHeaders() {
  const cookieStore = await cookies();
  const token = cookieStore.get("vendorToken")?.value;

  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getVendorCategories() {
  try {
    const headers = await getAuthHeaders();
    if (!headers.Authorization)
      return { success: false, message: "Not authenticated" };

    const { data } = await axiosClient.get("/vendor/inventory/categories", {
      headers,
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return (
        error.response?.data || {
          success: false,
          message: "Failed to fetch categories",
        }
      );
    }
    console.error("Get Vendor Categories Error:", error);
    return { success: false, message: "Failed to fetch categories" };
  }
}

export async function getVendorProducts() {
  try {
    const headers = await getAuthHeaders();
    if (!headers.Authorization)
      return { success: false, message: "Not authenticated" };

    const { data } = await axiosClient.get("/vendor/inventory/products", {
      headers,
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return (
        error.response?.data || {
          success: false,
          message: "Failed to fetch products",
        }
      );
    }
    console.error("Get Vendor Products Error:", error);
    return { success: false, message: "Failed to fetch products" };
  }
}

export async function updateVendorInventory(payload: {
  categoryIds: string[];
  productIds: string[];
}) {
  try {
    const headers = await getAuthHeaders();
    if (!headers.Authorization)
      return { success: false, message: "Not authenticated" };

    const { data } = await axiosClient.post(
      "/vendor/inventory/update",
      payload,
      { headers },
    );

    if (data.success) {
      updateTag("vendor-inventory");
      updateTag("vendor-profile");
    }

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return (
        error.response?.data || {
          success: false,
          message: "Failed to update inventory",
        }
      );
    }
    console.error("Update Vendor Inventory Error:", error);
    return { success: false, message: "Failed to update inventory" };
  }
}
