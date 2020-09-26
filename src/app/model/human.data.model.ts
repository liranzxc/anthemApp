

export interface HumanProfileModel  // for profile comp
{
  region :string;
  name : string;
  profile_image:string;
  numberVisitors : number;
  points : number; // model
}

export enum TypeVisit {
  Medical_take=1,
  Hospitalizations = 2,
  Visit_doctor=3,
  Visit_psychologist=4
}

export interface Visit {
  typeVisit:TypeVisit | number;
  dateVisit:Date | number;
}

export interface RecordModel {
  humanProfile : HumanProfileModel;
  visits : Visit[];
}
