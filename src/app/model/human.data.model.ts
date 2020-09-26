

export interface HumanProfileModel  // for profile comp
{
  region :string;
  name : string;
  profile_image:string;
  numberVisitors : number;
  points : number; // model
}

export enum TypeVisit {
  MEDICAL_TAKE=1,
  HOSPITALIZATIONS = 2,
  VISIT_DOCTOR=3,
  VISIT_PSYCHOLOGIST=4
}

export interface Visit {
  typeVisit:TypeVisit | number;
  dateVisit:Date | number;
}

export interface RecordModel {
  humanProfile : HumanProfileModel;
  visits : Visit[];
}
