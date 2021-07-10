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
    takingHormones: boolean = false;
    howlongTakingHormones: string = '';
    pergnancyHistory: boolean = false;
    menopause: boolean = false;
    pregnant: boolean = false;
    gravida: number = 0;
    para: number= 0;
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

    laterality: string = '';

}

export class FinalAssessment{
    id: number = 0;
    recommendationId: number = 0;
    biRadsId: number = 0;
    recommendation:Recommendation = new Recommendation();
    biRads:BiRads = new BiRads();
    recommendationText: string = '';
    conc: string = '';
}

export class BiRads{
    id:number = 0;
    name:string='';
}
export class Recommendation{
    id:number = 0;
    name:string = '';
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

export class PatientTest{
    id:number=0;
    clinicalInfoId: number= 0;
    generalInfoId: number = 0;
    finalAssessmentId: number = 0;
    doctorId: number=0;
    examDataId: number = 0;
}

export class Doctor{
    id: number = 0;
    name:String='';
    email:string='';
    password:string='';
    mobilePhone: null;
    specialization: string = '';
    location:string = '';
    city:string = '';
    country:string = '';
    patients:Patient[]=[new Patient()];
}

export class Login{
    email:string='';
    password:string='';
    RememberMe:boolean=false
}

export class image{
    id:number=0;
    patientId:number=0;
    imageName:string="";
    imagePath:string="";
}