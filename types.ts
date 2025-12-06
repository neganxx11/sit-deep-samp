export enum UserRole {
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
  USER = 'USER'
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  role: UserRole;
}

export interface Application {
  id: string;
  ownerId: string;
  name: string;
  secret: string; // The secret key for the app to talk to the API
  status: 'active' | 'paused' | 'banned';
  createdAt: string;
  version: string;
}

export interface License {
  id: string;
  appId: string;
  key: string;
  level: number; // 1 = Basic, 2 = Premium, etc.
  durationDays: number;
  status: 'unused' | 'used' | 'banned' | 'expired';
  usedBy?: string; // HWID or Username
  createdAt: string;
}

export interface Session {
  user: User;
  token: string;
}