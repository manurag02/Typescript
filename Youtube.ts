class YoutubeVideo
{
    
    totalViews: number;
    newSpeed: string;
    private currentView:number;
    private views:number;
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
       this.views=this.currentView;

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

    setQuality=(setQuality:string)=>{
        console.log("Gets the quality of the video uploaded");
       console.log("Current Resolution is"+this.setQuality);
    }

    getSpeed=()=>{
        console.log("Gets the streaming speed of the video");
        console.log("Current speed is"+this.speed);
    }

    setSpeed=(newSpeed:number)=>{
        console.log("Sets the streaming speed of the video");
        console.log("Current Resolution is"+this.newSpeed);
    }

    private calcViews=()=>{
        this.totalViews =this.currentView+1;
        console.log("This is a private Method to calculate views of a video");
        return this.totalViews;
    }

    getViews=()=>{
         console.log("Displays the number of Views on the page");
         console.log("Total Views"+this.totalViews);
    }

    setLength =(startfrom :number)=>{
        //set's the length of the video to start from
        this.length=startfrom;
    }

    getRelatedVideos = () =>{
     console.log("displays the list of other related Videos");
    }

    
}

class Social extends YoutubeVideo
{ 
    public comment:string;
    likes:string;
    dislikes:string;
    share:string;
   
    getComments(){
      console.log("Displays the comments posted on current Video");
      console.log("Comments"+this.comment);
    }

    setComments(){
        console.log("Adds comments posted on current Video");
        console.log("Comments"+this.comment);
    }

    getLikes(){
        console.log("Displays the likes on current Video");
        console.log("Comments"+this.comment);
      }
  
       private calcLikes = ()=>{
           console.log("calcuates the total likes on current video");
       }
      setLikes(){
          console.log("Adds Likes posted on current Video");
          console.log("Comments"+this.comment);
      }

      getShares(){
        console.log("Displays the comments posted on current Video");
        console.log("Comments"+this.comment);
      }
  
      setShares(){
          console.log("Adds comments posted on current Video");
          console.log("Comments"+this.comment);
      }

}

let myVideo = new YoutubeVideo("https://www.youtube.com/watch?v=hjWf8A0YNSE",
                              "Guru Randhawa: High Rated Gabru Official Song | DirectorGifty | T-Series",
                              "T Series","1080P",5.25,1);

     myVideo.uploadVideo("https://www.youtube.com/watch?v=hjWf8A0YNSE") ;                        