// import React,{useEffect,useState,useContext} from 'react';
// import { Container } from 'react-bootstrap';
// import {PostContext} from '../../store/PostContex'
// import {useHistory} from 'react-router-dom'

// import Heart from '../../assets/Heart';
// import { FirebaseContext } from '../../store/Context';
// import './Post.css';

// function Posts() {
//   const {firebase} =useContext(FirebaseContext)
//   const [products,setProducts] =useState([])
//   const {setPostDetails} = useContext(PostContext)
//   const history = useHistory()
//   useEffect(()=>{
//     firebase.firestore().collection('products').get().then((snapshot)=>{
//       const allPost = snapshot.docs.map((product)=>{
//         return {
//           ...product.data(),
//           id:product.id
//         }
//       })
//       setProducts(allPost)
//     })
//   },[])
//   return (
//     <Container className="postParentDiv">
//       <div className="moreView">
//         <div className="heading">
//           <span>Quick Menu</span>
//           <span>View more</span>
//         </div>
//         <div className="cards">
//         {products.map(product=>{
//           return (
//            <div className="card" onClick={()=>{
//               setPostDetails(product)
//               console.log(setPostDetails);
//               history.push('/viewpost')
//            }}>
//            <div className="favorite">
//              <Heart></Heart>
//            </div>
//            <div className="image">
//              <img src={product.url} alt="" />
//            </div>
//            <div className="content">
//              <p className="rate">&#x20B9;{product.price}</p>
//              <span className="kilometer">{product.category}</span>
//              <p className="name"> {product.name}</p>
//            </div>
//            <div className="date">
//              <span>{product.createdAt}</span>
//            </div>
//          </div>
//          )
//         })
//         }
//         </div>
//       </div>
//       <div className="recommendations">
//         <div className="heading">
//           <span>Fresh recommendations</span>
//         </div>
//         <div className="cards">
//           <div className="card">
//             <div className="favorite">
//               <Heart></Heart>
//             </div>
//             <div className="image">
//               <img src="../../../Images/R15V3.jpg" alt="" />
//             </div>
//             <div className="content">
//               <p className="rate">&#x20B9; 250000</p>
//               <span className="kilometer">Two Wheeler</span>
//               <p className="name"> YAMAHA R15V3</p>
//             </div>
//             <div className="date">
//               <span>10/5/2021</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default Posts;



import React, { useState, useEffect, useContext } from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContex';
import './Post.css';
import {useHistory} from 'react-router-dom'
import { Container } from 'react-bootstrap';

function Posts() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const {setPostDetails}=useContext(PostContext)
  const history=useHistory()
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        };
      });
      setProducts(allPost)
    })
  }, []);
  
  return (
    <div className="postParentDiv">
   
      <div className="moreView">
      <Container>
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
       
          {products.map(product => {
            return(
            <div className="card"
              onClick={()=>{
                setPostDetails(product)
                history.push('/viewpost')
              }}>

              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9;{product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
            )
          })
          }

        </div>
        </Container>
      </div>
      <div className="recommendations">
        <Container>
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
        </Container>
      </div>
    
    </div>
  );
}

export default Posts;