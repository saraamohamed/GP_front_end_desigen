export class ExamData{
    id: number = 0;
    name: string= '';
    mobileNumber: string= '';
    emailAddress: string= '';
    patientID: string= '';
    address: string= '';
    modailty: string= '';
    referringDoctor: string= '';
    studyDate: string= '';
    lastOperation: string= '';
}
export class GeneralInfo{
    id: number = 0;
    examDate: string = '';
    examReason: string = '';
    complain: string = '';
    hadAMammogram: boolean = false;
    whenHadAMammogram: string = '';
    whereHadAMammogram: string = '';
    HistoryOfMammogram: string = '';
    PersonalHistoryOfBreastCancer: boolean = false;
    motherAge: number = 0;
    mother: boolean = false;
    sisterAge: number = 0;
    sister: boolean = false;
    daughterAge: number = 0;
    daughter: boolean = false;
    grandmotherAge: number = 0;
    grandmother: boolean = false;
    auntAge: number = 0;
    aunt: boolean = false;
    cousinAge: number = 0;
    cousin: boolean = false;
    TakingHormones: boolean = false;
    HowlongTakingHormones: string = '';
}
export class ClinicalInfo{
    id: number = 0;
    numOfMass: number = 0;
    asyId: number = 0;
    featuresId: number = 0;
    massMarginId: number = 0;
    massDensityId: number = 0;
    typicallyBenignId: number = 0;
    suspiciousMorphologyId: number = 0;
    distributionId: number = 0;
    quadrantId: number = 0;
    clockFaceId: number = 0;
    massShape: string = '';
    breastCompostion: string = '';
    distribution: string = '';
    laterality: string = '';
    depth: string = '';
    distanceFromTheNipple: string = '';
}
export class FinalAssessmeny{

}
export class Patient{
    id: number = 0;
    clinicalInfoId: number= 0;
    generalInfoId: number = 0;
    finalAssessmentId: number = 0;
    examDataId: number = 0;
}
export class Doctor{

}
