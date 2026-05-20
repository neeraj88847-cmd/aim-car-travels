export interface Car {
  id: number;
  name: string;
  category: string;
  seats: number;
  transmission: string;
  price12h: number;
  price24h: number;
  extraHour: number;
  displayPrice: number;
}

export const cars: Car[] = [
  { id: 1, name: 'Maruti Suzuki Swift', category: 'Hatchbacks', seats: 5, transmission: 'Manual', price12h: 1500, price24h: 2500, extraHour: 200, displayPrice: 2500 },
  { id: 2, name: 'Maruti Suzuki Baleno', category: 'Hatchbacks', seats: 5, transmission: 'Manual', price12h: 1500, price24h: 2500, extraHour: 200, displayPrice: 2500 },
  { id: 3, name: 'Hyundai i20', category: 'Hatchbacks', seats: 5, transmission: 'Manual', price12h: 1500, price24h: 2500, extraHour: 200, displayPrice: 2500 },
  { id: 4, name: 'Maruti Suzuki Swift Dzire', category: 'Sedans', seats: 5, transmission: 'Manual', price12h: 1500, price24h: 2500, extraHour: 200, displayPrice: 2500 },
  { id: 5, name: 'Maruti Suzuki Dzire Automatic', category: 'Sedans', seats: 5, transmission: 'Automatic', price12h: 2000, price24h: 3000, extraHour: 200, displayPrice: 3000 },
  { id: 6, name: 'Hyundai Venue', category: 'Compact SUVs', seats: 5, transmission: 'Manual', price12h: 2000, price24h: 3000, extraHour: 200, displayPrice: 3000 },
  { id: 7, name: 'Kia Syros', category: 'Compact SUVs', seats: 5, transmission: 'Manual', price12h: 2000, price24h: 3000, extraHour: 200, displayPrice: 3000 },
  { id: 8, name: 'Maruti Suzuki Brezza', category: 'Compact SUVs', seats: 5, transmission: 'Manual', price12h: 2000, price24h: 3000, extraHour: 200, displayPrice: 3000 },
  { id: 9, name: 'Maruti Suzuki Ertiga', category: 'MUVs', seats: 7, transmission: 'Manual', price12h: 2500, price24h: 3500, extraHour: 200, displayPrice: 3500 },
  { id: 10, name: 'Toyota Innova', category: 'MUVs', seats: 7, transmission: 'Manual', price12h: 2500, price24h: 3500, extraHour: 200, displayPrice: 3500 },
  { id: 11, name: 'Mahindra Thar', category: 'Adventure', seats: 4, transmission: 'Manual 4x4', price12h: 3500, price24h: 4500, extraHour: 200, displayPrice: 4500 },
  { id: 12, name: 'Toyota Innova Crysta', category: 'Premium', seats: 7, transmission: 'Manual', price12h: 3500, price24h: 4500, extraHour: 200, displayPrice: 4500 },
];

export const categories = ['All', 'Hatchbacks', 'Sedans', 'Compact SUVs', 'MUVs', 'Adventure', 'Premium'];
