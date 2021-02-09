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
export class features{
    skinRetraction: boolean = false;
    nippleRetraction: boolean = false;
    skinThickening: boolean = false;
    architecturalDistortion: boolean = false;
    intramammaryLymphNode: boolean = false;
    skinLesion: boolean = false;
    solitaryDilatedDuct: boolean = false;
    trabecularThickening: boolean = false;
    axillaryAdenopathy: boolean = false;
}

export class ClinicalInfo{
    id: number = 0;
    numOfMass: number = 0;
    asyId: number = 0;
    featuresId: number = 0;
    features:features=new features();
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
export class FinalAssessment{
    id: number = 0;
    recommendationId: number = 0;
    biRadsId: number = 0;
    recommendationText: string = '';
    conc: string = '';
}
export class Patient{
    id: number = 0;
    clinicalInfoId: number= 0;
    ClinicalInfo:ClinicalInfo = new ClinicalInfo();
    GeneralInfo:GeneralInfo = new GeneralInfo();
    FinalAssessment:FinalAssessment = new FinalAssessment();
    generalInfoId: number = 0;
    finalAssessmentId: number = 0;
    // examDataId: number = 0;
}
export class Doctor{

}
