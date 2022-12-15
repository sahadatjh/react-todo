import React, { Component } from 'react';
import Navbar from './components/navbar.component';
import Post from './components/post.component';

export default class Wraper extends Component {
  
  state={
    posts:[
        {
            id:1, 
            name:"Md Sahadat Hossen",
            date:"15 Dec 2022",
            txt:"একবার এক পর্যটক মেক্সিকোয় গেলেন; জেলেদের মাছের খুব প্রশংসা করলেন। তারপর বললেন,“আচ্ছা, মাছ ধরতে আপনাদের কত সময় লাগে?”“বেশিক্ষণ না” জেলেদের এক কথার উত্তর।“তাহলে আপনারা আরও বেশি সময় দিয়ে আরও বেশি মাছ ধরেন না কেন?” লোকটা",
            pic:"sahadat.png",
            like:true
        },
        {
            id:3, 
            name:"Fatima",
            date:"30 Oct 2020",
            txt:`ইসলাম একাধিক বিয়ের অনুমতি দেয়। একাধিক বিয়েতে উৎসাহ দেয় না। কোরানের যেই আয়াতকে আমরা ২-৩-৪ বিয়ের পক্ষে দলীল হিসেবে ব্যবহার করি, সে আয়াতে স্ত্রী গ্রহণের সর্বোচ্চ সীমা ৪ পর্যন্ত নির্দিষ্ট করা হয়েছে। আর এই আয়াত এমন এক সময় অবতীর্ণ হয় যখন একেকজনের ৮-১০জন করে স্ত্রী থাকতো। এমনকি শতাধিক‌ও ছিল। স্ত্রী গ্রহণের ক্ষেত্রে কোনো নির্দিষ্ট সীমা বা নিয়ম ছিল না। ইসলাম এই ব্যাপারটাকে একটা শৃঙ্খলার মধ্যে আনে, কিছু নিয়ম শর্ত বেঁধে দেয়। কিন্তু আমরা সেই আয়াতকে এমনভাবে ব্যাখ্যা করি যেন ইসলাম ২-৩-৪ বিয়েতে উৎসাহিত `,
            pic:'afia.png',
            like:false
        },
        {
            id:2, 
            name:"Afroza Khatun",
            date:"01 Jan 2023",
            txt:"এই যুবক আমাদের পিতাকে হত্যা করেছে। আমরা এর বিচার চাই। দোষী যুবককে টেনে-হিঁচড়ে খলীফার দরবারে নিয়ে এসেছেন দুই ব্যক্তি। তারা তাদের পিতার হত্যার বিচার চান। খলীফা হযরত উমর (রা) সেই যুবককে জিজ্ঞেস করলেন যে তার বিপক্ষে করা অভিযোগ সত্য  কিনা। অভিযোগ স্বীকার করল যুবক। দোষী যুবক সেই ঘটনার বর্ণনা দিলঃ",
            pic:"IMG_20220624_184819.jpg",
            like:false
        },
    ]
  }

  handleToggleClick = (id) => {
    // console.log(`click like btn => ${id}`);
    const posts = [...this.state.posts];
    const post = posts.find(post => post.id===id);
    post.like=!post.like;
    this.setState({posts});
  }

  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='m-auto mt-3' style={{ maxWidth:'700px', }}>
            {
                this.state.posts.map( (post, key) => (
                    <Post key={key} info={post} handleToggleClick={this.handleToggleClick}/>
                ) )
            }
            </div>
        </React.Fragment>
    )
  }
}
