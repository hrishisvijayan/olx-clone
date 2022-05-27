import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContex';

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState()
  const {postDetails} =useContext(PostContext)
  const {firebase} =useContext(FirebaseContext)
  
  useEffect(() => {
   
    // const { userId } = postDetails
    // console.log(userId);
    // firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
    //   res.forEach(doc => {
    //     setUserDetails(doc.data())
    //   })  
    // })
    console.log("Here");
  }, [])
  return (
    <div className="viewParentDiv">
     
      <div className="imageShowDiv">
        <img
          src={postDetails?postDetails.url:""}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails? postDetails.price : ""} </p>
          <span>{postDetails? postDetails.name : ""}</span>
          <p>{postDetails? postDetails.category : ""}</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          {/* <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p> */}
        </div>
      </div>
      
    </div>
  );
}
export default View;
