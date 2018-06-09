class YoutubeVideo
{
    
    newQuality: string;
    totalViews: number = 0;
    newSpeed: string;
    public views:number;
    private publishDate:Date;
    public videoUpload :string[] =[];

    constructor(public url:string,public title:string,public owner:string,public quality:string,public length:number,
                public speed:number)
    {
       this.url = url;
       this.title = title;
       this.owner= owner;
       this.publishDate = this.publishDate;
       this.quality=quality;
       this.length=length;
       this.speed=speed;

    }
    
    uploadVideo = (...videoUpload:string[])=>{
          console.log(videoUpload);
          let newVideo= videoUpload;
          videoUpload = videoUpload.concat(newVideo);
          console.log(videoUpload+"video uploaded successfully");
          return videoUpload; 
            
    }
    
    getQuality=()=>{
       console.log("Gets the quality of the video uploaded");
       console.log("Current Resolution is"+this.quality);
    }

    setQuality=(newQuality:string)=>{
        console.log("Gets the quality of the video uploaded");
       console.log("Current Resolution is"+newQuality);
    }

    getSpeed=()=>{
        console.log("Gets the streaming speed of the video");
        console.log("Current speed is"+this.speed);
    }

    setSpeed=(newSpeed:number)=>{
        console.log("Sets the streaming speed of the video");
        console.log("Current Speed is"+newSpeed);
    }

    private calcViews=()=>{
        this.totalViews =this.totalViews+1;
        console.log("This is a private Method to calculate views of a video");
        return this.totalViews;
    }

    getViews=()=>{
          this.calcViews();
         console.log("Displays the number of Views on the page");
         console.log("Total Views"+this.totalViews);
    }

    setLength =(startfrom :number)=>{
        //set's the length of the video to start from
        this.length=startfrom;
        console.log("Starts from the clicked time on Screen");
    }

    getRelatedVideos = () =>{
        console.log("This method fetches data from Json Array and updates the list");
    
    }

    
}

class Social extends YoutubeVideo
{ 
    public comment:string;
    likes:string;
    dislikes:string;
    share:string;
    totalLikes:number=0;
   
    getComments(){
      console.log("Displays the comments posted on current Video");
      console.log("Comments"+this.comment);
    }

    setComments(){
        console.log("Adds comments posted on current Video");
        console.log("Comments"+this.comment);
    }


    private calcLikes = ()=>{
        console.log("calcuates the total likes on current video");
        this.totalLikes= this.totalLikes+100;
        return this.totalLikes;
    }

    getLikes(){
        this.calcLikes();
        console.log("TotalLikes"+this.totalLikes);
      }
  
       
      setLikes(){
          console.log("Adds Likes posted on current Video");
          console.log("Liked");
          this.getLikes();
      }

      getShares(){
        console.log("Displays the shares posted on current Video");
        console.log("Comments"+this.comment);
      }
  
      setShares(){
          
          console.log("Shared");
          this.getShares;
      }

}

let myVideo = new YoutubeVideo("https://www.youtube.com/watch?v=hjWf8A0YNSE",
                              "Guru Randhawa: High Rated Gabru Official Song | DirectorGifty | T-Series",
                              "T Series","1080P",5.25,1);

     myVideo.uploadVideo("https://www.youtube.com/watch?v=hjWf8A0YNSE","https://www.youtube.com") ; 
     myVideo.getRelatedVideos();
     myVideo.getQuality(); 
     myVideo.setQuality("720P");  
     myVideo.getViews(); 

let mySocial = new Social("https://www.youtube.com/watch?v=hjWf8A0YNSE",
                        "Guru Randhawa: High Rated Gabru Official Song | DirectorGifty | T-Series",
                        "T Series","720P",5.25,1);
      mySocial.uploadVideo("https://www.youtube.com/watch?v=hjWf8A0YNSE") ;
      mySocial.getLikes();
      mySocial.getQuality();
      mySocial.setLikes();
