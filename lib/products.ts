"use server";
import { Polar } from "@polar-sh/sdk";
import { redirect } from "next/navigation";

const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: "sandbox",
});

export const allCourses = async () => {
  const checkout = await polar.checkouts.create({
    products: ["7ab4deb9-732d-4b55-b3d5-da94352e9161"],
    allowDiscountCodes: false,
    successUrl: process.env.POLAR_SUCCESS_URL!,
  });

  redirect(checkout.url);
};

export const fetchCheckout = async (id: string) => {
  try {
    const checkout = await polar.checkouts.get({ id })
    
    return checkout
  } catch (err: any) {
    if (err.error === "ResourceNotFound" || err.statusCode === 404) {
      return null;
    }
    throw err;
  }
};