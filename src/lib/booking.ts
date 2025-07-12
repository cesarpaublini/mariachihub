import { cities } from './cities'

export interface BookingData {
  // Step 1: Availability
  date: string | null
  time: string | null
  city: string | null
  
  // Step 2: Details
  groupSize: string | null
  eventType: string | null
  fullName: string | null
  email: string | null
  phone: string | null
  eventAddress: string | null // Address of the event
  notes: string | null
  
  // Step 3: Payment
  paymentIntentId: string | null
  totalAmount: number | null
  depositAmount: number | null
}

export const initialBookingData: BookingData = {
  date: null,
  time: null,
  city: null,
  groupSize: null,
  eventType: null,
  fullName: null,
  email: null,
  phone: null,
  eventAddress: null,
  notes: null,
  paymentIntentId: null,
  totalAmount: null,
  depositAmount: null,
}

export const groupSizes = [
  { id: 'serenata', name: 'Serenata Package', price: 450, description: '30 minutes - Perfect for birthdays & love tributes' },
  { id: 'weekday', name: 'Weekday Special', price: 399, description: '30 minutes - Limited time offer for off-peak bookings' },
  { id: 'signature', name: 'Signature Package', price: 699, description: '1 hour minimum - Great for weddings & private events' },
  { id: 'extended3', name: 'Extended Package (3 Hours)', price: 1899, description: '3 hours - Ideal for full-day celebrations' },
  { id: 'extended4', name: 'Extended Package (4 Hours)', price: 2499, description: '4 hours - Perfect for continuous entertainment' },
  { id: 'extended5', name: 'Extended Package (5 Hours)', price: 2999, description: '5 hours - Ultimate celebration experience' },
]

export const eventTypes = [
  { id: 'wedding', name: 'Wedding', icon: '💒' },
  { id: 'quinceanera', name: 'Quinceañera', icon: '👑' },
  { id: 'birthday', name: 'Birthday Party', icon: '🎂' },
  { id: 'corporate', name: 'Corporate Event', icon: '🏢' },
  { id: 'anniversary', name: 'Anniversary', icon: '💕' },
  { id: 'other', name: 'Other', icon: '🎉' },
]

export const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
]

export const getGroupSizePrice = (groupSizeId: string): number => {
  const groupSize = groupSizes.find(gs => gs.id === groupSizeId)
  return groupSize?.price || 0
}

export const calculateDeposit = (totalAmount: number): number => {
  return Math.round(totalAmount * 0.25) // 25% deposit
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const getAvailableCities = () => {
  return cities.map(city => ({
    id: city,
    name: city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' '),
  }))
}

export const validateStep1 = (data: Partial<BookingData>): boolean => {
  return !!(data.date && data.time && data.city)
}

export const validateStep2 = (data: Partial<BookingData>): boolean => {
  return !!(
    data.groupSize &&
    data.eventType &&
    data.fullName &&
    data.email &&
    data.eventAddress // Require event address
  )
}

export const getEventTypeIcon = (eventTypeId: string): string => {
  const eventType = eventTypes.find(et => et.id === eventTypeId)
  return eventType?.icon || '🎉'
}

export const getEventTypeName = (eventTypeId: string): string => {
  const eventType = eventTypes.find(et => et.id === eventTypeId)
  return eventType?.name || 'Other'
}

export const getGroupSizeName = (groupSizeId: string): string => {
  const groupSize = groupSizes.find(gs => gs.id === groupSizeId)
  return groupSize?.name || 'Custom Package'
} 