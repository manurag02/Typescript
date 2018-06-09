
class Basicinfo{
    public Displaypic:Blob;
    public locations:string[]=[];
    public work:string[]=[];
    public Basic:string[]=[];
    
    constructor(public name:string,public DOB:string,public city:string,public email:string)
    {
      this.name=name;
      this.DOB=DOB;
      this.city=city;
      this.email=email;
      
    }

    methAddIn=()=>{  
        this.Basic.concat(this.name,this.DOB,this.city,this.email);
         console.log("Basic info Uploaded");      
     }
       
   
     methUploadDisplay=()=>{
         let pic:Blob;
        console.log("This method uploads Display Pic");
        return pic;
       }
    
   methEdit =()=>{
    console.log("Record Edited");
   }
   
   methDelete =()=>{
  console.log("Record Deleted");

   }

   methDisplay=()=>{
    console.log("This method Displays data from Json Array of exisiting object");
  
   }

   methSave=()=>{
    console.log("Record Saved");      
   }

  private methGetCoordinates=()=>{ 
       // This method gets coordinates from GPS to push it into location array
       console.log("Location Recieved from GPS for "+this.city);
           return this.city;
   }

   methGetLocation=()=>{
         this.methGetCoordinates();
         console.log("Recieves the cooridnates and verifies the current location");
         return this.city;
   }

   methCalcAge=(date)=>{
       let Age:number;
    console.log("calculates and returns age "+this.DOB);
    return Age;
   }
   
}

class Work extends Basicinfo{
    exp:number;
    workLoc:string;
    constructor(public companyName:string,public since:string,public position:string,public city:string){
        super('name','dob','city','email');
       this.companyName=companyName;
       this.since=since;
       this.position=position;
       this.city=city;
       this.methSave();
    }//

   private methGetExperience=()=>{
     this.exp= this.methCalcAge(this.since);//Date is passed to calculate experience in an org
       return this.exp;
    }
    
    methGetCompanyLocation=()=>{
        this.methGetLocation();
        console.log('Company locationis '+this.city);
    }
    
 
}

class Places extends Basicinfo{
    constructor(public city:string){
        super('name','dob','city','email');
       this.city=city;
    }//

    locCoordinates= this.methGetLocation();
    //this variable gets the co-ordinates of the location and adds to the array
   methCheckIn=()=>{  
//Function to add location in existing location array 
    console.log("Checkin added successfully"+this.city);      

  }

}

//Like wise we can add classes for Family, LifeEvents,Books,Shows,Movies which will add data to Json and display it

let myProfile = new Basicinfo('Anurag','03/03/1997','mumbai','manurag@gmail.com');
    myProfile.methCalcAge('03/03/1997');
    myProfile.methUploadDisplay();

let myWorkex = new Work('capgemini','09092015','Software Engineer','Pune');
    myWorkex.methGetCompanyLocation();

let myPlaces = new Places('Havana');
    myPlaces.methCheckIn();