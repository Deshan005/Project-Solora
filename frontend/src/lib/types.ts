export interface Client {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  notes?: string;
  serviceHistory: string[];
}

export interface Staff {
  id: string;
  name: string;
  role?: string;
  available: boolean;
}

export interface Job {
  id: string;
  title: string;
  clientId: string;
  staffId: string;
  date: string; // YYYY-MM-DD
  start: string; // HH:mm
  end: string;   // HH:mm
  notes?: string;
}

export interface Invoice {
  id: string;
  clientId: string;
  jobId?: string;
  amount: number;
  issuedOn: string;
  dueOn: string;
  status: 'Paid' | 'Unpaid';
}
