"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import Link from "next/link";
import {
  User,
  Calendar,
  Heart,
  Settings,
  MapPin,
  Star,
  ArrowRight,
  LogOut,
  Clock,
  Check,
  ExternalLink,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mockProperties } from "@/data/mockProperties";
import { formatPrice, cn } from "@/lib/utils";

const tabs = [
  { id: "overview", label: "Overview", icon: User },
  { id: "bookings", label: "My Bookings", icon: Calendar },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "settings", label: "Settings", icon: Settings },
];

const mockBookings = [
  {
    id: "GIR-2025-87432",
    property: mockProperties[0],
    room: "Forest View Deluxe Room",
    checkIn: "2025-12-20",
    checkOut: "2025-12-23",
    guests: 2,
    total: 34220,
    paid: 17110,
    status: "confirmed" as const,
  },
  {
    id: "GIR-2025-76541",
    property: mockProperties[1],
    room: "Royal Suite",
    checkIn: "2025-10-15",
    checkOut: "2025-10-18",
    guests: 4,
    total: 52800,
    paid: 52800,
    status: "completed" as const,
  },
  {
    id: "GIR-2025-98123",
    property: mockProperties[2],
    room: "Jungle View Cottage",
    checkIn: "2026-01-10",
    checkOut: "2026-01-12",
    guests: 2,
    total: 18500,
    paid: 0,
    status: "pending" as const,
  },
];

const statusConfig = {
  confirmed: { label: "Confirmed", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30" },
  completed: { label: "Completed", color: "bg-primary/10 text-primary border-primary/30" },
  pending: { label: "Pending", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30" },
  cancelled: { label: "Cancelled", color: "bg-red-500/10 text-red-500 border-red-500/30" },
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Profile Card */}
              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-luxury text-center">
                <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 text-black font-heading font-bold text-2xl">
                  RS
                </div>
                <h2 className="font-heading font-semibold text-lg">Rahul Sharma</h2>
                <p className="text-sm text-muted-foreground">rahul@example.com</p>
                <Badge className="mt-3 gradient-gold text-black gap-1">
                  <Star className="w-3 h-3" />
                  Premium Member
                </Badge>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      activeTab === tab.id
                        ? "gradient-gold text-black shadow-gold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
                <Separator className="my-3" />
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors">
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* ═══ Overview Tab ═══ */}
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="font-heading text-2xl sm:text-3xl font-bold">
                    Welcome back, <span className="gradient-gold-text">Rahul</span> 👋
                  </h1>
                  <p className="text-muted-foreground mt-1">Here&apos;s your booking overview</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Total Bookings", value: "3", icon: Calendar },
                    { label: "Upcoming", value: "1", icon: Clock },
                    { label: "Wishlist", value: "4", icon: Heart },
                    { label: "Reviews", value: "2", icon: Star },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-2xl bg-card border border-border/50"
                    >
                      <stat.icon className="w-5 h-5 text-primary mb-2" />
                      <p className="text-2xl font-heading font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Upcoming Booking */}
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Upcoming Stay
                  </h3>
                  {mockBookings.filter((b) => b.status === "confirmed").map((booking) => (
                    <div key={booking.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="relative w-full sm:w-32 h-24 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={booking.property.images[0]?.url || ""}
                          alt={booking.property.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-sm">{booking.property.name}</h4>
                            <p className="text-xs text-muted-foreground mt-0.5">{booking.room}</p>
                          </div>
                          <Badge variant="outline" className={statusConfig[booking.status].color}>
                            {statusConfig[booking.status].label}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>{new Date(booking.checkIn).toLocaleDateString("en-IN", { day: "numeric", month: "short" })} — {new Date(booking.checkOut).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                          <span>•</span>
                          <span>{booking.guests} guests</span>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <Link href={`/properties/${booking.property.slug}`}>
                            <Button size="sm" variant="outline" className="gap-1 text-xs">
                              View Property <ExternalLink className="w-3 h-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/properties" className="group">
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-luxury transition-all">
                      <MapPin className="w-6 h-6 text-primary mb-3" />
                      <h3 className="font-heading font-semibold mb-1">Explore Properties</h3>
                      <p className="text-sm text-muted-foreground">Discover new luxury stays in Gir</p>
                      <ArrowRight className="w-4 h-4 mt-3 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                  <div className="p-6 rounded-2xl bg-card border border-border/50">
                    <Bell className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-heading font-semibold mb-1">Notifications</h3>
                    <p className="text-sm text-muted-foreground">You have no new notifications</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ═══ Bookings Tab ═══ */}
            {activeTab === "bookings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h1 className="font-heading text-2xl font-bold">My Bookings</h1>
                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="p-5 rounded-2xl bg-card border border-border/50 hover:shadow-luxury transition-all"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative w-full sm:w-36 h-28 rounded-xl overflow-hidden shrink-0">
                          <Image
                            src={booking.property.images[0]?.url || ""}
                            alt={booking.property.name}
                            fill
                            className="object-cover"
                            sizes="144px"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs text-muted-foreground font-mono">{booking.id}</p>
                              <h3 className="font-heading font-semibold mt-1">{booking.property.name}</h3>
                              <p className="text-sm text-muted-foreground">{booking.room}</p>
                            </div>
                            <Badge variant="outline" className={statusConfig[booking.status].color}>
                              {statusConfig[booking.status].label}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-sm">
                            <div>
                              <p className="text-xs text-muted-foreground">Check-in</p>
                              <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Check-out</p>
                              <p className="font-medium">{new Date(booking.checkOut).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Total</p>
                              <p className="font-medium price-number">{formatPrice(booking.total)}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Paid</p>
                              <p className="font-medium price-number text-emerald-gir">{formatPrice(booking.paid)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ═══ Wishlist Tab ═══ */}
            {activeTab === "wishlist" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h1 className="font-heading text-2xl font-bold">My Wishlist</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {mockProperties.slice(0, 4).map((property) => (
                    <Link key={property.id} href={`/properties/${property.slug}`}>
                      <div className="group rounded-2xl overflow-hidden border border-border/50 hover:shadow-luxury transition-all">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={property.images[0]?.url || ""}
                            alt={property.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="50vw"
                          />
                          <button
                            className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{property.name}</h3>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" /> {property.city}
                            </div>
                            <p className="price-number font-bold text-sm text-primary">{formatPrice(property.basePrice)}<span className="text-xs font-normal text-muted-foreground">/night</span></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ═══ Settings Tab ═══ */}
            {activeTab === "settings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h1 className="font-heading text-2xl font-bold">Account Settings</h1>

                <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-6">
                  <h2 className="font-heading font-semibold text-lg">Personal Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "First Name", value: "Rahul" },
                      { label: "Last Name", value: "Sharma" },
                      { label: "Email", value: "rahul@example.com" },
                      { label: "Phone", value: "+91 98765 43210" },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="text-sm font-medium mb-1.5 block">{field.label}</label>
                        <input
                          type="text"
                          defaultValue={field.value}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background"
                        />
                      </div>
                    ))}
                  </div>
                  <Button className="gradient-gold text-black font-semibold gap-2 shadow-gold">
                    <Check className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-4">
                  <h2 className="font-heading font-semibold text-lg">Preferences</h2>
                  <div className="space-y-3">
                    {[
                      { label: "Email notifications", desc: "Receive booking updates and offers" },
                      { label: "SMS alerts", desc: "Get booking confirmations via SMS" },
                      { label: "Marketing emails", desc: "Receive seasonal deals and promotions" },
                    ].map((pref) => (
                      <label key={pref.label} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                        <div>
                          <p className="text-sm font-medium">{pref.label}</p>
                          <p className="text-xs text-muted-foreground">{pref.desc}</p>
                        </div>
                        <input type="checkbox" defaultChecked className="accent-[oklch(0.75_0.12_75)]" />
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
