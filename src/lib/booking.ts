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
  notes: null,
  paymentIntentId: null,
  totalAmount: null,
  depositAmount: null,
}

export const groupSizes = [
  { id: '3', name: '3 Musicians', price: 299, description: 'Perfect for intimate gatherings' },
  { id: '4', name: '4 Musicians', price: 399, description: 'Great for small celebrations' },
  { id: '6', name: '6 Musicians', price: 599, description: 'Ideal for medium events' },
  { id: '8', name: '8+ Musicians', price: 799, description: 'For grand celebrations' },
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
    data.email
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