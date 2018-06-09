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
        this.setQuality = function (setQuality) {
            console.log("Gets the quality of the video uploaded");
            console.log("Current Resolution is" + _this.setQuality);
        };
        this.getSpeed = function () {
            console.log("Gets the streaming speed of the video");
            console.log("Current speed is" + _this.speed);
        };
        this.setSpeed = function (newSpeed) {
            console.log("Sets the streaming speed of the video");
            console.log("Current Resolution is" + _this.newSpeed);
        };
        this.calcViews = function () {
            _this.totalViews = _this.currentView + 1;
            console.log("This is a private Method to calculate views of a video");
            return _this.totalViews;
        };
        this.getViews = function () {
            console.log("Displays the number of Views on the page");
            console.log("Total Views" + _this.totalViews);
        };
        this.setLength = function (startfrom) {
            //set's the length of the video to start from
            _this.length = startfrom;
        };
        this.getRelatedVideos = function () {
            console.log("displays the list of other related Videos");
        };
        this.url = url;
        this.title = title;
        this.owner = owner;
        this.publishDate = this.publishDate;
        this.quality = quality;
        this.length = length;
        this.speed = speed;
        this.views = this.currentView;
    }
    return YoutubeVideo;
}());
var Social = /** @class */ (function (_super) {
    __extends(Social, _super);
    function Social() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Social.prototype.getComments = function () {
        console.log("Displays the comments posted on current Video");
        console.log("Comments" + this.comment);
    };
    Social.prototype.setComments = function () {
        console.log("Adds comments posted on current Video");
        console.log("Comments" + this.comment);
    };
    return Social;
}(YoutubeVideo));
