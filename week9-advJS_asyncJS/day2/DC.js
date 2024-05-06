class Video{
    constructor(title, uploader, time){
      this.title=title
      this.uploader=uploader
      this.time=time
    }
  
    // Create a method called watch() which displays a string as follows:
    watch(){
      return `${this.uploader} watched all ${this.time} of ${this.title}!`
    }
  }
  
  // Instantiate a new Video instance and call the watch() method.
  const newVideo=new Video("Titanic", "WeTransfer", 195)
  // console.log(newVideo.watch()); 
  const anotherVideo=new Video("Avatar", "DriveUpload", 200)
  // console.log(anotherVideo.watch());
  
  // Use an array to store data for five Video instances (ie. title, uploader, time)
  let Videos=[{}];
  // Videos.map(()=>{newVideo.this.uploader, this.time, this.title})
  Videos.push(Video.watch(this.uploader, this.time, this.title))
  console.log(Videos);
  
  // Loop through the array to instantiate those instances.
  for (let video in Videos)
  console.log(video);
  