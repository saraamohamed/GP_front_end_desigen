export class ExamData{
    id: number = 0;
    doctorId:number=0;
    name: string= '';
    emailAddress: string= '';
    mobileNumber: string= '';
    
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
    examReason: string = '' ;
    complain: string = '';
    modalityType: string='';
    hadAMammogram: boolean = false;
    whenHadAMammogram: string = '';
    whereHadAMammogram: string = '';
    historyOfMammogram: string = '';
    personalHistoryOfBreastCancer: boolean = false;
    motherAge: number;
    mother: boolean = false;
    sisterAge: number;
    sister: boolean = false;
    daughterAge: number;
    daughter: boolean = false;
    grandmotherAge: number;
    grandmother: boolean = false;
    auntAge: number ;
    aunt: boolean = false;
    cousinAge: number;
    cousin: boolean = false;
    takingHormones: boolean = false;
    howlongTakingHormones: string = '';
    pergnancyHistory: boolean = false;
    menopause: boolean = false;
    pregnant: boolean = false;
    gravida: number;
    para: number;
    lmp:string='';
}
export class features{
    id:number=0;
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

export class massSpecifications{
        id:number=0;    
        clinicalInfoId:number=0 ;
        massShape:String='';
        massMarginId :number=0 ;
        massDensityId:number=0 ;
        laterality:string ='';
        quadrantId:number=0 ;
        clockFaceId:number=0 ;
        depth:string='' ;
        distanceFromTheNipple:string ='';
}

export class ClinicalInfo{
    id: number = 0;
    numOfMass: number = 0;
    asymmetriesId: number = 0;
    featureId: number = 0;
    features:features=new features();
    massSpecifications:massSpecifications[]=[new massSpecifications()];
    typicallyBenignId: number = 0;
    suspiciousMorphologyId: number = 0;
    distributionId: number = 0;  
    breastCompostion: string = '';
    // distribution: string = '';
    laterality: string = '';

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
    clinicalInfo:ClinicalInfo = new ClinicalInfo();
    generalInfo:GeneralInfo = new GeneralInfo();
    finalAssessment:FinalAssessment = new FinalAssessment();
    generalInfoId: number = 0;
    finalAssessmentId: number = 0;
    doctorId: number=0;
    examDataId: number = 0;
}
export class Doctor{
    id: number = 0;
    name:String='';
    email:string='';
    password:string=''
}

export class Login{
    email:string='';
    password:string='';
    RememberMe:boolean=false
}
