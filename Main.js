var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(url, title, owner, quality, length, speed) {
        var _this = this;
        this.url = url;
        this.title = title;
        this.owner = owner;
        this.quality = quality;
        this.length = length;
        this.speed = speed;
        this.totalViews = 0;
        this.videoUpload = [];
        this.uploadVideo = function () {
            var videoUpload = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                videoUpload[_i] = arguments[_i];
            }
            console.log(videoUpload);
            var newVideo = videoUpload;
            videoUpload = videoUpload.concat(newVideo);
            console.log(videoUpload + "video uploaded successfully");
            return videoUpload;
        };
        this.getQuality = function () {
            console.log("Gets the quality of the video uploaded");
            console.log("Current Resolution is" + _this.quality);
        };
        this.setQuality = function (newQuality) {
            console.log("Gets the quality of the video uploaded");
            console.log("Current Resolution is" + newQuality);
        };
        this.getSpeed = function () {
            console.log("Gets the streaming speed of the video");
            console.log("Current speed is" + _this.speed);
        };
        this.setSpeed = function (newSpeed) {
            console.log("Sets the streaming speed of the video");
            console.log("Current Speed is" + newSpeed);
        };
        this.calcViews = function () {
            _this.totalViews = _this.totalViews + 1;
            console.log("This is a private Method to calculate views of a video");
            return _this.totalViews;
        };
        this.getViews = function () {
            _this.calcViews();
            console.log("Displays the number of Views on the page");
            console.log("Total Views" + _this.totalViews);
        };
        this.setLength = function (startfrom) {
            //set's the length of the video to start from
            _this.length = startfrom;
            console.log("Starts from the clicked time on Screen");
        };
        this.getRelatedVideos = function () {
            console.log("This method fetches data from Json Array and updates the list");
        };
        this.url = url;
        this.title = title;
        this.owner = owner;
        this.publishDate = this.publishDate;
        this.quality = quality;
        this.length = length;
        this.speed = speed;
    }
    return YoutubeVideo;
}());
var Social = /** @class */ (function (_super) {
    __extends(Social, _super);
    function Social() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalLikes = 0;
        _this.calcLikes = function () {
            console.log("calcuates the total likes on current video");
            _this.totalLikes = _this.totalLikes + 100;
            return _this.totalLikes;
        };
        return _this;
    }
    Social.prototype.getComments = function () {
        console.log("Displays the comments posted on current Video");
        console.log("Comments" + this.comment);
    };
    Social.prototype.setComments = function () {
        console.log("Adds comments posted on current Video");
        console.log("Comments" + this.comment);
    };
    Social.prototype.getLikes = function () {
        this.calcLikes();
        console.log("TotalLikes" + this.totalLikes);
    };
    Social.prototype.setLikes = function () {
        console.log("Adds Likes posted on current Video");
        console.log("Liked");
        this.getLikes();
    };
    Social.prototype.getShares = function () {
        console.log("Displays the shares posted on current Video");
        console.log("Comments" + this.comment);
    };
    Social.prototype.setShares = function () {
        console.log("Shared");
        this.getShares;
    };
    return Social;
}(YoutubeVideo));
var myVideo = new YoutubeVideo("https://www.youtube.com/watch?v=hjWf8A0YNSE", "Guru Randhawa: High Rated Gabru Official Song | DirectorGifty | T-Series", "T Series", "1080P", 5.25, 1);
myVideo.uploadVideo("https://www.youtube.com/watch?v=hjWf8A0YNSE", "https://www.youtube.com");
myVideo.getRelatedVideos();
myVideo.getQuality();
myVideo.setQuality("720P");
myVideo.getViews();
var mySocial = new Social("https://www.youtube.com/watch?v=hjWf8A0YNSE", "Guru Randhawa: High Rated Gabru Official Song | DirectorGifty | T-Series", "T Series", "720P", 5.25, 1);
mySocial.uploadVideo("https://www.youtube.com/watch?v=hjWf8A0YNSE");
mySocial.getLikes();
mySocial.getQuality();
mySocial.setLikes();
