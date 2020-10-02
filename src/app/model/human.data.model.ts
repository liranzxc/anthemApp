export interface HumanProfileModel  // for profile comp
{
  region: string;
  name: string;
  profile_image: string;
  numberVisitors: number;
  points: number; // model
}

export enum TypeVisit {
  event_prescription_filled = 1,
  event_hospitalization = 2,
  event_doctor_visit = 3,
  event_psychologist_visit = 4
}

export interface Visit {
  typeVisit: TypeVisit | number;
  dateVisit: Date | number;
}

export interface RecordModel {
  humanProfile: HumanProfileModel;
  visits: Visit[];
}
