export interface Data {
  id: string;
  label: string;
  percentage: number;
}

export interface Friend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export interface Transaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface User {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}
