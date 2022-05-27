import React,{useContext} from 'react';
import {Container} from 'react-bootstrap';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <Container className="headerChildDiv">
        <div className="brandName">
          <OlxLogo onClick={()=>history.push('/')}></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text"/>
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
           {user ? <span>{user.displayName}</span> :
            <span onClick={()=>history.push('/login')}>Login</span>
           }
          <hr/>
        </div>
          { user && <span className='logout' onClick={()=>{
            swal({
              title: "Are you sure?",
              text: "Are you sure you want to Logout !",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                firebase.auth().signOut()
                history.push('/')
              } 
            })
          }}>Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div onClick={()=>history.push('/create')} className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
