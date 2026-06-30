export type BookingStatus =
  | "pending"
  | "confirmed"
  | "checked_in"
  | "completed"
  | "cancelled"
  | "refunded";

export type PaymentType = "advance" | "remaining" | "refund";
export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";

export interface Booking {
  id: string;
  bookingRef: string;
  customerId: string;
  customerName: string;
  propertyId: string;
  propertyName: string;
  propertyImage: string;
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guestsAdults: number;
  guestsChildren: number;
  totalAmount: number;
  advanceAmount: number;
  remainingAmount: number;
  status: BookingStatus;
  specialRequests: string;
  addOns: AddOn[];
  payments: Payment[];
  createdAt: string;
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface Payment {
  id: string;
  bookingId: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  amount: number;
  currency: string;
  type: PaymentType;
  status: PaymentStatus;
  createdAt: string;
}

export interface BookingFormData {
  propertyId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guestsAdults: number;
  guestsChildren: number;
  specialRequests: string;
  addOns: string[];
  couponCode?: string;
}

export interface PricingBreakdown {
  roomCharges: number;
  nights: number;
  pricePerNight: number;
  addOnsTotal: number;
  subtotal: number;
  discount: number;
  gst: number;
  gstPercentage: number;
  total: number;
  advancePayable: number;
  remainingAtCheckIn: number;
}
