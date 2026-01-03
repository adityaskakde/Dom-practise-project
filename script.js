const reels = [
  { ismuted: true,
    username: "aditya_dev",
    likecount: 1240,
    commentcount: 89,
    sharecount: 32,
    isFollowed: false,
    isLiked: false,
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    caption: "Late night coding hits different 💻🔥",
    video: "./videos/video1.mp4"
  },
  {    ismuted: true,

    username: "travel_with_raj",
    likecount: 8921,
    commentcount: 340,
    sharecount: 210,
    isFollowed: true,
    isLiked: true,
    userprofile: "https://randomuser.me/api/portraits/men/45.jpg",
    caption: "Mountains > Everything 🏔️✨",
    video: "./videos/video2.mp4"
  },
  {    ismuted: true,

    username: "fitness_girl",
    likecount: 15670,
    commentcount: 512,
    sharecount: 389,
    isFollowed: false,
    isLiked: false,
    userprofile: "https://randomuser.me/api/portraits/women/22.jpg",
    caption: "Consistency is the key 🔥💪",
    video: "./videos/video3.mp4"
  },
  {    ismuted: true,

    username: "street_foodie",
    likecount: 7450,
    commentcount: 278,
    sharecount: 145,
    isFollowed: true,
    isLiked: true,
    userprofile: "https://randomuser.me/api/portraits/men/68.jpg",
    caption: "Best momos in the city 🤤🥟",
    video: "./videos/video4.mp4"
  },
  {    ismuted: true,

    username: "music_vibes",
    likecount: 4310,
    commentcount: 156,
    sharecount: 98,
    isFollowed: false,
    isLiked: false,
    userprofile: "https://randomuser.me/api/portraits/women/61.jpg",
    caption: "Headphones on, world off 🎧🎶",
    video: "./videos/video5.mp4"
  },
  {    ismuted: true,

    username: "tech_explainer",
    likecount: 9820,
    commentcount: 401,
    sharecount: 267,
    isFollowed: true,
    isLiked: true,
    userprofile: "https://randomuser.me/api/portraits/men/15.jpg",
    caption: "JavaScript tips you MUST know ⚡",
    video: "./videos/video6.mp4"
  },
  {    ismuted: true,

    username: "artsy_world",
    likecount: 3670,
    commentcount: 120,
    sharecount: 64,
    isFollowed: false,
    isLiked: false,
    userprofile: "https://randomuser.me/api/portraits/women/39.jpg",
    caption: "Turning imagination into art 🎨✨",
    video: "./videos/video7.mp4"
  },
  {    ismuted: true,

    username: "daily_motivation",
    likecount: 11230,
    commentcount: 498,
    sharecount: 352,
    isFollowed: true,
    isLiked: true,
    userprofile: "https://randomuser.me/api/portraits/men/73.jpg",
    caption: "One day or day one 🚀",
    video: "./videos/video8.mp4"
  },
  {    ismuted: true,

    username: "car_lover",
    likecount: 6590,
    commentcount: 234,
    sharecount: 178,
    isFollowed: false,
    isLiked: false,
    userprofile: "https://randomuser.me/api/portraits/men/90.jpg",
    caption: "Dream car unlocked 🏎️💨",
    video: "./videos/video9.mp4"
  },
  {    ismuted: true,

    username: "nature_clicks",
    likecount: 14800,
    commentcount: 620,
    sharecount: 410,
    isFollowed: true,
    isLiked: false,
    userprofile: "https://randomuser.me/api/portraits/women/18.jpg",
    caption: "Sunsets never disappoint 🌅",
    video: "./videos/video10.mp4"
  }
];

var allreel = document.querySelector(".Allreels")

function addData(){


   var sum = ''
  reels.forEach(function (elem, idx) {
    sum = sum + `<div class="reel">
          <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
          <div class="mute" id=${idx}>
          ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
      
    </div>
   
      <div class="bottom">
        <div class="user">
          <img src="${elem.userprofile}" alt="">
            <h4>ismuted:true,>${elem.username}</h4>
          <h3>${elem.username}</h3>
          <button id = ${idx} class='follow'>${elem.isFollowed ? "Following" : "Follow"}</button>
        </div>
        <h3>${elem.caption}</h3>
  <div class="right">
            <div id=${idx} class="like">
              <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likecount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentcount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.sharecount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
  })


allreel.innerHTML = sum;

}
addData()


allreel.addEventListener('click', function(dets){

  
if(dets.target.className == 'like'){
  if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likecount++
      reels[dets.target.id].isLiked = true
  }else{
      reels[dets.target.id].likecount--
      reels[dets.target.id].isLiked = false
}
addData()
}


if(dets.target.className =='follow'){
  if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
  }else{
      reels[dets.target.id].isFollowed = false
  }
  addData()
}
  

   if (dets.target.className == 'mute') {
    if (!reels[dets.target.id].ismuted) {
      reels[dets.target.id].ismuted = true
    } else {
      reels[dets.target.id].ismuted = false
    }
    addData()
  }
})
